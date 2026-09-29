function getCart() {
  return getFromStorage('cart') || [];
}

function saveCart(cart) {
  saveStorage('cart', cart);
}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
  renderCart();
}

function changeQuantity(productId, delta) {
  let cart = getCart();
  const item = cart.find(item => item.id === productId);

  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    cart = cart.filter(item => item.id !== productId);
  }

  saveCart(cart);
  renderCart();
}

function renderCart() {
  const emptyCartBlock = document.getElementById('emptyCartBlock');
  const cartContent = document.getElementById('cartContent');

  if (!cartContent || !emptyCartBlock) return;

  const cart = getCart();
  const allProducts = getAllProducts();

  if (!cart.length) {
    emptyCartBlock.style.display = 'block';
    cartContent.innerHTML = '';
    return;
  }

  emptyCartBlock.style.display = 'none';

  const cartProducts = cart.map(cartItem => {
    const product = allProducts.find(item => item.id === cartItem.id);
    if (!product) return null;

    return {
      ...product,
      quantity: cartItem.quantity,
      total: product.price * cartItem.quantity
    };
  }).filter(Boolean);

  const totalSum = cartProducts.reduce((sum, item) => sum + item.total, 0);

  cartContent.innerHTML = `
    <section class="cart-list">
      <h2>Корзина</h2>

      <div class="cart-items">
        ${cartProducts.map(item => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">

            <div class="cart-item-info">
              <h3>${item.title}</h3>
              <p>${item.city}</p>
              <p>${item.price.toLocaleString()} ₸</p>
            </div>

            <div class="cart-item-controls">
              <button class="qty-btn" data-id="${item.id}" data-delta="-1">-</button>
              <span>${item.quantity}</span>
              <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
            </div>

            <div class="cart-item-total">
              <p>${item.total.toLocaleString()} ₸</p>
              <button class="remove-btn" data-id="${item.id}">Удалить</button>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="cart-summary">
        <h3>Итого: ${totalSum.toLocaleString()} ₸</h3>
      </div>
    </section>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  document.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.remove-btn');
    const qtyBtn = e.target.closest('.qty-btn');

    if (removeBtn) {
      removeFromCart(Number(removeBtn.dataset.id));
    }

    if (qtyBtn) {
      changeQuantity(Number(qtyBtn.dataset.id), Number(qtyBtn.dataset.delta));
    }
  });
});