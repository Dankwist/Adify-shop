function getFavorites() {
  return getFromStorage('favorites') || [];
}

function saveFavorites(favorites) {
  saveStorage('favorites', favorites);
}

function removeFromFavorites(productId) {
  const favorites = getFavorites().filter(id => id !== productId);
  saveFavorites(favorites);
  renderFavorites();
}

function clearFavorites() {
  saveFavorites([]);
  renderFavorites();
}

function renderFavorites() {
  const container = document.getElementById('js-favorite-card-id');
  const emptyBlock = document.getElementById('favoriteEmpty');
  const clearBtn = document.getElementById('clearFavoritesBtn');

  if (!container) return;

  const favoriteIds = getFavorites();
  const allProducts = getAllProducts();
  const favoriteProducts = allProducts.filter(item => favoriteIds.includes(item.id));

  if (!favoriteProducts.length) {
    container.innerHTML = '';
    if (emptyBlock) emptyBlock.style.display = 'block';
    if (clearBtn) clearBtn.style.display = 'none';
    return;
  }

  if (emptyBlock) emptyBlock.style.display = 'none';
  if (clearBtn) clearBtn.style.display = 'inline-block';

  container.innerHTML = favoriteProducts.map(item => `
    <div class="favorite-item">
      <img src="${item.image}" alt="${item.title}" class="favorite-item-image">

      <div class="favorite-item-body">
        <h3>${item.title}</h3>
        <p>${item.city}</p>
        <p class="favorite-price">${item.price.toLocaleString()} ₸</p>

        <button class="remove-favorite-btn" data-id="${item.id}" type="button">
          Убрать из избранного
        </button>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderFavorites();

  const clearBtn = document.getElementById('clearFavoritesBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearFavorites);
  }

  document.addEventListener('click', e => {
    const removeBtn = e.target.closest('.remove-favorite-btn');

    if (removeBtn) {
      removeFromFavorites(Number(removeBtn.dataset.id));
    }
  });
});