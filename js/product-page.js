function getCart() {
  return getFromStorage('cart') || [];
}

function saveCart(cart) {
  saveStorage('cart', cart);
}

function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart(cart);
  alert('Товар добавлен в корзину');
}

function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get('id'));
}

function getProductById(id) {
  const products = getAllProducts();
  return products.find(item => Number(item.id) === Number(id));
}

function renderProductPage() {
  const container = document.getElementById('productPage');
  if (!container) return;

  const productId = getProductIdFromUrl();
  const product = getProductById(productId);

  if (!product) {
    container.innerHTML = `
      <div class="product-not-found">
        <h1>Объявление не найдено</h1>
        <a href="../index.html">Вернуться на главную</a>
      </div>
    `;
    return;
  }

  const productImage = product.image || '../img/default.png';
  const description = product.description || `Продается товар "${product.title}".
Категория: ${product.category || 'Не указана'}.
Подкатегория: ${product.subcategory || 'Не указана'}.
Город: ${product.city || 'Не указан'}.
Состояние: ${product.condition || 'Не указано'}.`;

  const contactName = product.contactName || 'Продавец Adify';
  const contactPhone = product.contactPhone || '+7 777 000 00 00';

  container.innerHTML = `
    <div class="product-layout">
      <section class="product-main">
        <div class="product-gallery">
          <img src="${productImage}" alt="${product.title}" class="product-main-image">
        </div>

        <div class="product-description-card">
          <h2>Описание</h2>
          <p>${description}</p>
          <div class="product-meta">
            <span>ID: ${product.id}</span>
            <span>Город: ${product.city || 'Не указан'}</span>
            <span>Состояние: ${product.condition || 'Не указано'}</span>
          </div>
        </div>
      </section>

      <aside class="product-sidebar">
        <div class="product-price-card">
          <p class="product-price">${Number(product.price).toLocaleString()} ₸</p>
          <h1 class="product-title">${product.title}</h1>

          <div class="product-actions">
            <button class="message-btn" type="button">Сообщение</button>
            <button class="cart-btn-big" type="button" data-id="${product.id}">В корзину</button>
          </div>
        </div>

        <div class="seller-card">
          <h3>Пользователь</h3>
          <p><strong>${contactName}</strong></p>
          <p>${contactPhone}</p>
          <p>${product.city || 'Казахстан'}</p>
        </div>

        <div class="ad-card">
          <h3>Реклама</h3>
          <img src="../img/reclama2.jpg" alt="Реклама" class="ad-card-image">
          <p>Здесь потом будет ваш рекламный блок</p>
        </div>
      </aside>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProductPage();

  document.addEventListener('click', (e) => {
    const cartBtn = e.target.closest('.cart-btn-big');
    if (cartBtn) {
      addToCart(Number(cartBtn.dataset.id));
    }
  });
});