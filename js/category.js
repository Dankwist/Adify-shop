const categoryTitles = {
  transport: 'Авто',
  electronics: 'Электроника',
  home: 'Дом и сад',
  animals: 'Животные',
  kids: 'Детский мир',
  fashion: 'Мода и стиль',
  jobs: 'Работа',
  hobby: 'Хобби и спорт',
  repair: 'Ремонт'
};

const categoryFilters = {
  transport: [
    {
      id: 'year',
      label: 'Год',
      type: 'select',
      options: ['', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018']
    },
    {
      id: 'transmission',
      label: 'Коробка',
      type: 'select',
      options: ['', 'Автомат', 'Механика', 'Вариатор', 'Робот']
    },
    {
      id: 'fuel',
      label: 'Топливо',
      type: 'select',
      options: ['', 'Бензин', 'Дизель', 'Гибрид', 'Электро', 'Газ']
    },
    {
      id: 'body',
      label: 'Кузов',
      type: 'select',
      options: ['', 'Седан', 'Хэтчбек', 'Кроссовер', 'Внедорожник', 'Купе', 'Универсал']
    }
  ],

  electronics: [
    {
      id: 'brand',
      label: 'Бренд',
      type: 'select',
      options: ['', 'Apple', 'Samsung', 'Xiaomi', 'Lenovo', 'Sony', 'HP', 'Asus']
    },
    {
      id: 'conditionTech',
      label: 'Состояние техники',
      type: 'select',
      options: ['', 'Новый', 'Б/у', 'Как новый']
    },
    {
      id: 'memory',
      label: 'Память',
      type: 'select',
      options: ['', '32 GB', '64 GB', '128 GB', '256 GB', '512 GB', '1 TB']
    },
    {
      id: 'delivery',
      label: 'Доставка',
      type: 'select',
      options: ['', 'Есть доставка', 'Только самовывоз']
    }
  ],

  home: [
    {
      id: 'conditionHome',
      label: 'Состояние',
      type: 'select',
      options: ['', 'Новый', 'Б/у']
    },
    {
      id: 'material',
      label: 'Материал',
      type: 'select',
      options: ['', 'Дерево', 'Металл', 'Пластик', 'Стекло', 'Ткань', 'Кожа']
    },
    {
      id: 'room',
      label: 'Для комнаты',
      type: 'select',
      options: ['', 'Кухня', 'Спальня', 'Гостиная', 'Детская', 'Офис', 'Сад']
    },
    {
      id: 'assembly',
      label: 'Сборка',
      type: 'select',
      options: ['', 'В собранном виде', 'Требует сборки']
    }
  ],

  animals: [
    {
      id: 'animalType',
      label: 'Тип',
      type: 'select',
      options: ['', 'Собаки', 'Кошки', 'Птицы', 'Рыбы', 'Грызуны', 'Другое']
    },
    {
      id: 'gender',
      label: 'Пол',
      type: 'select',
      options: ['', 'Мальчик', 'Девочка']
    },
    {
      id: 'age',
      label: 'Возраст',
      type: 'select',
      options: ['', 'До 3 месяцев', '3-6 месяцев', '6-12 месяцев', '1+ год', '2+ года']
    },
    {
      id: 'vaccinated',
      label: 'Прививки',
      type: 'select',
      options: ['', 'Есть', 'Нет']
    }
  ],

  kids: [
    {
      id: 'ageGroup',
      label: 'Возраст ребёнка',
      type: 'select',
      options: ['', '0-1', '1-3', '3-5', '5-7', '7-10', '10+']
    },
    {
      id: 'conditionKids',
      label: 'Состояние',
      type: 'select',
      options: ['', 'Новый', 'Б/у']
    },
    {
      id: 'genderKids',
      label: 'Для кого',
      type: 'select',
      options: ['', 'Для мальчиков', 'Для девочек', 'Универсальное']
    },
    {
      id: 'deliveryKids',
      label: 'Доставка',
      type: 'select',
      options: ['', 'Есть доставка', 'Только самовывоз']
    }
  ],

  fashion: [
    {
      id: 'genderFashion',
      label: 'Пол',
      type: 'select',
      options: ['', 'Женское', 'Мужское', 'Унисекс', 'Детское']
    },
    {
      id: 'size',
      label: 'Размер',
      type: 'select',
      options: ['', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '36', '37', '38', '39', '40', '41', '42']
    },
    {
      id: 'conditionFashion',
      label: 'Состояние',
      type: 'select',
      options: ['', 'Новый', 'Б/у', 'Как новый']
    },
    {
      id: 'brandFashion',
      label: 'Бренд',
      type: 'select',
      options: ['', 'Nike', 'Adidas', 'Zara', 'H&M', 'Puma', 'New Balance', 'Без бренда']
    }
  ],

  jobs: [
    {
      id: 'employment',
      label: 'График',
      type: 'select',
      options: ['', 'Полный день', 'Частичная занятость', 'Сменный график', 'Удалённо', 'Подработка']
    },
    {
      id: 'experience',
      label: 'Опыт',
      type: 'select',
      options: ['', 'Без опыта', '1-3 года', '3-5 лет', '5+ лет']
    },
    {
      id: 'salaryType',
      label: 'Зарплата',
      type: 'select',
      options: ['', 'За месяц', 'За неделю', 'За день', 'За час', 'По договорённости']
    },
    {
      id: 'education',
      label: 'Образование',
      type: 'select',
      options: ['', 'Не важно', 'Среднее', 'Среднее специальное', 'Высшее']
    }
  ],

  hobby: [
    {
      id: 'conditionHobby',
      label: 'Состояние',
      type: 'select',
      options: ['', 'Новый', 'Б/у']
    },
    {
      id: 'sportType',
      label: 'Направление',
      type: 'select',
      options: ['', 'Футбол', 'Фитнес', 'Велоспорт', 'Теннис', 'Рыбалка', 'Туризм', 'Музыка']
    },
    {
      id: 'brandHobby',
      label: 'Бренд',
      type: 'select',
      options: ['', 'Nike', 'Adidas', 'Wilson', 'Yonex', 'Без бренда']
    },
    {
      id: 'forWhom',
      label: 'Для кого',
      type: 'select',
      options: ['', 'Для взрослых', 'Для детей', 'Универсально']
    }
  ],

  repair: [
    {
      id: 'repairType',
      label: 'Тип',
      type: 'select',
      options: ['', 'Услуги', 'Материалы', 'Инструменты']
    },
    {
      id: 'serviceFormat',
      label: 'Формат',
      type: 'select',
      options: ['', 'С выездом', 'Без выезда', 'Самовывоз']
    },
    {
      id: 'conditionRepair',
      label: 'Состояние',
      type: 'select',
      options: ['', 'Новый', 'Б/у']
    },
    {
      id: 'toolPower',
      label: 'Питание',
      type: 'select',
      options: ['', 'Сетевой', 'Аккумуляторный', 'Ручной']
    }
  ]
};

const params = new URLSearchParams(window.location.search);
const currentCat = params.get('cat') || '';
const currentSub = params.get('sub') || '';

const dynamicFilters = document.getElementById('dynamicFilters');
const productsList = document.getElementById('productsList');
const categoryTitle = document.getElementById('categoryTitle');
const categorySubtitle = document.getElementById('categorySubtitle');

function getFavorites() {
  return getFromStorage('favorites') || [];
}

function saveFavorites(favorites) {
  saveStorage('favorites', favorites);
}

function toggleFavorite(productId) {
  let favorites = getFavorites();

  if (favorites.includes(productId)) {
    favorites = favorites.filter(id => id !== productId);
  } else {
    favorites.push(productId);
  }

  saveFavorites(favorites);
  applyFilters();
}

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
  alert('Добавлено в корзину');
}

function renderCategoryHeader() {
  if (!categoryTitle) return;

  const title = categoryTitles[currentCat] || 'Категория';
  categoryTitle.textContent = title;

  if (categorySubtitle) {
    categorySubtitle.textContent = currentSub
      ? `Объявления из подкатегории ${currentSub}`
      : `Объявления из категории «${title}»`;
  }
}

function renderDynamicFilters(catKey) {
  if (!dynamicFilters) return;

  const filters = categoryFilters[catKey] || [];

  if (!filters.length) {
    dynamicFilters.innerHTML = '';
    return;
  }

  dynamicFilters.innerHTML = filters.map((filter) => {
    const optionsHtml = filter.options
      .map((option) => `<option value="${option}">${option || 'Все'}</option>`)
      .join('');

    return `
      <div class="filter-group">
        <label for="${filter.id}">${filter.label}</label>
        <select id="${filter.id}">
          ${optionsHtml}
        </select>
      </div>
    `;
  }).join('');
}

function renderProducts(items) {
  if (!productsList) return;

  if (!items.length) {
    productsList.innerHTML = '<p class="empty-products">Ничего не найдено</p>';
    return;
  }

  const favorites = getFavorites();

  productsList.innerHTML = items.map((item) => `
    <div class="product-card">
      <a href="../pages/product.html?id=${item.id}" class="product-link-image">
        <img src="${item.image}" alt="${item.title}" class="product-image">
      </a>

      <button class="favorite-btn" data-id="${item.id}" type="button">
        ${favorites.includes(item.id) ? '❤️' : '🤍'}
      </button>

      <a href="../pages/product.html?id=${item.id}" class="product-title-link">
        <h3>${item.title}</h3>
      </a>

      <p class="product-price">${Number(item.price).toLocaleString()} ₸</p>
      <p class="product-city">${item.city || 'Не указан'}</p>
      <p class="product-condition">${item.condition || 'Не указано'}</p>

      <div class="product-actions">
        <button class="cart-btn" data-id="${item.id}" type="button">В корзину</button>
      </div>
    </div>
  `).join('');
}

function applyFilters() {
  const allProducts = getAllProducts();

  const searchValue = document.getElementById('searchFilter')?.value.trim().toLowerCase() || '';
  const cityValue = document.getElementById('cityFilter')?.value || '';
  const conditionValue = document.getElementById('conditionFilter')?.value || '';
  const minValue = Number(document.getElementById('minPrice')?.value) || 0;
  const maxRaw = document.getElementById('maxPrice')?.value;
  const maxValue = maxRaw ? Number(maxRaw) : Infinity;

  let filtered = allProducts.filter((item) => {
    if (currentCat && item.category !== currentCat) return false;
    if (currentSub && item.subcategory !== currentSub) return false;
    if (searchValue && !item.title.toLowerCase().includes(searchValue)) return false;
    if (cityValue && item.city !== cityValue) return false;
    if (conditionValue && item.condition !== conditionValue) return false;
    if (Number(item.price) < minValue) return false;
    if (Number(item.price) > maxValue) return false;

    return true;
  });

  const specialFilters = categoryFilters[currentCat] || [];

  specialFilters.forEach((filter) => {
    const element = document.getElementById(filter.id);
    if (!element) return;

    const value = element.value;
    if (!value) return;

    filtered = filtered.filter((item) => item[filter.id] === value);
  });

  renderProducts(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  if (!productsList) return;

  renderCategoryHeader();
  renderDynamicFilters(currentCat);
  applyFilters();

  const filtersSection = document.querySelector('.filters');

  if (filtersSection) {
    filtersSection.addEventListener('input', applyFilters);
    filtersSection.addEventListener('change', applyFilters);
  }

  productsList.addEventListener('click', (e) => {
    const favoriteBtn = e.target.closest('.favorite-btn');
    const cartBtn = e.target.closest('.cart-btn');

    if (favoriteBtn) {
      toggleFavorite(Number(favoriteBtn.dataset.id));
    }

    if (cartBtn) {
      addToCart(Number(cartBtn.dataset.id));
    }
  });
});