const isAuth = getFromStorage('isAuth');
const user = getFromStorage('adifyUser');
const authArea = document.getElementById('authArea');

if (isAuth && user && authArea) {
    authArea.innerHTML = `
        <div class="profile">
            <div class="profile-avatar">${user.name[0].toUpperCase()}</div>
            <span class="profile-name">${user.name}</span>
            <button id="logoutBtn" class="logout-btn">Выйти</button>
        </div>
    `;
}
document.addEventListener('click', function(e) {
    if (e.target.id === 'logoutBtn') {
        clearStorage('isAuth');
        window.location.reload();
    }
});


// mega menu 

const catBtn = document.getElementById('catBtn');
const mega = document.getElementById('mega');
const overlay = document.getElementById('overlay');
const catItems = document.querySelectorAll('.cat-item');
const subcats = document.getElementById('subcats');

const categoriesData = {
  transport: {
    title: 'Авто',
    url: '/pages/category.html?cat=transport',
    columns: [
      {
        title: 'Автомобили',
        items: [
          { name: 'Седаны', url: '/pages/category.html?cat=transport&sub=sedan' },
          { name: 'Хэтчбеки', url: '/pages/category.html?cat=transport&sub=hatchback' },
          { name: 'Кроссоверы', url: '/pages/category.html?cat=transport&sub=crossover' },
          { name: 'Внедорожники', url: '/pages/category.html?cat=transport&sub=suv' },
          { name: 'Электромобили', url: '/pages/category.html?cat=transport&sub=ev' }
        ]
      },
      {
        title: 'Мотоциклы',
        items: [
          { name: 'Мотоциклы', url: '/pages/category.html?cat=transport&sub=moto' },
          { name: 'Скутеры', url: '/pages/category.html?cat=transport&sub=scooter' },
          { name: 'Квадроциклы', url: '/pages/category.html?cat=transport&sub=quad' },
          { name: 'Мопеды', url: '/pages/category.html?cat=transport&sub=moped' }
        ]
      },
      {
        title: 'Запчасти и сервисы',
        items: [
          { name: 'Шины и диски', url: '/pages/category.html?cat=transport&sub=tires' },
          { name: 'Запчасти', url: '/pages/category.html?cat=transport&sub=parts' },
          { name: 'Аксессуары', url: '/pages/category.html?cat=transport&sub=accessories' },
          { name: 'СТО', url: '/pages/category.html?cat=transport&sub=service' },
          { name: 'Аренда авто', url: '/pages/category.html?cat=transport&sub=rent' }
        ]
      }
    ]
  },

  electronics: {
    title: 'Электроника',
    url: '/pages/category.html?cat=electronics',
    columns: [
      {
        title: 'Телефоны и гаджеты',
        items: [
          { name: 'Смартфоны', url: '/pages/category.html?cat=electronics&sub=smartphones' },
          { name: 'Кнопочные телефоны', url: '/pages/category.html?cat=electronics&sub=button-phones' },
          { name: 'Умные часы', url: '/pages/category.html?cat=electronics&sub=smartwatches' },
          { name: 'Наушники', url: '/pages/category.html?cat=electronics&sub=headphones' },
          { name: 'Планшеты', url: '/pages/category.html?cat=electronics&sub=tablets' }
        ]
      },
      {
        title: 'Компьютеры',
        items: [
          { name: 'Ноутбуки', url: '/pages/category.html?cat=electronics&sub=laptops' },
          { name: 'ПК', url: '/pages/category.html?cat=electronics&sub=pc' },
          { name: 'Мониторы', url: '/pages/category.html?cat=electronics&sub=monitors' },
          { name: 'Комплектующие', url: '/pages/category.html?cat=electronics&sub=components' },
          { name: 'Периферия', url: '/pages/category.html?cat=electronics&sub=periphery' }
        ]
      },
      {
        title: 'Техника',
        items: [
          { name: 'Телевизоры', url: '/pages/category.html?cat=electronics&sub=tv' },
          { name: 'Игровые приставки', url: '/pages/category.html?cat=electronics&sub=consoles' },
          { name: 'Фотоаппараты', url: '/pages/category.html?cat=electronics&sub=cameras' },
          { name: 'Аудиотехника', url: '/pages/category.html?cat=electronics&sub=audio' },
          { name: 'Видеотехника', url: '/pages/category.html?cat=electronics&sub=video' }
        ]
      }
    ]
  },

  home: {
    title: 'Дом и сад',
    url: '/pages/category.html?cat=home',
    columns: [
      {
        title: 'Мебель',
        items: [
          { name: 'Диваны', url: '/pages/category.html?cat=home&sub=sofas' },
          { name: 'Кровати', url: '/pages/category.html?cat=home&sub=beds' },
          { name: 'Шкафы', url: '/pages/category.html?cat=home&sub=wardrobes' },
          { name: 'Столы', url: '/pages/category.html?cat=home&sub=tables' },
          { name: 'Стулья', url: '/pages/category.html?cat=home&sub=chairs' }
        ]
      },
      {
        title: 'Бытовая техника',
        items: [
          { name: 'Холодильники', url: '/pages/category.html?cat=home&sub=fridges' },
          { name: 'Стиральные машины', url: '/pages/category.html?cat=home&sub=washing-machines' },
          { name: 'Пылесосы', url: '/pages/category.html?cat=home&sub=vacuum' },
          { name: 'Микроволновки', url: '/pages/category.html?cat=home&sub=microwave' },
          { name: 'Кондиционеры', url: '/pages/category.html?cat=home&sub=air-conditioners' }
        ]
      },
      {
        title: 'Сад и ремонт',
        items: [
          { name: 'Инструменты', url: '/pages/category.html?cat=home&sub=tools' },
          { name: 'Садовая мебель', url: '/pages/category.html?cat=home&sub=garden-furniture' },
          { name: 'Освещение', url: '/pages/category.html?cat=home&sub=lighting' },
          { name: 'Стройматериалы', url: '/pages/category.html?cat=home&sub=materials' },
          { name: 'Декор', url: '/pages/category.html?cat=home&sub=decor' }
        ]
      }
    ]
  },

  animals: {
    title: 'Животные',
    url: '/pages/category.html?cat=animals',
    columns: [
      {
        title: 'Домашние животные',
        items: [
          { name: 'Собаки', url: '/pages/category.html?cat=animals&sub=dogs' },
          { name: 'Кошки', url: '/pages/category.html?cat=animals&sub=cats' },
          { name: 'Птицы', url: '/pages/category.html?cat=animals&sub=birds' },
          { name: 'Рыбки', url: '/pages/category.html?cat=animals&sub=fish' },
          { name: 'Грызуны', url: '/pages/category.html?cat=animals&sub=rodents' }
        ]
      },
      {
        title: 'Товары для животных',
        items: [
          { name: 'Корма', url: '/pages/category.html?cat=animals&sub=food' },
          { name: 'Клетки и домики', url: '/pages/category.html?cat=animals&sub=cages' },
          { name: 'Переноски', url: '/pages/category.html?cat=animals&sub=carriers' },
          { name: 'Игрушки', url: '/pages/category.html?cat=animals&sub=toys' },
          { name: 'Аксессуары', url: '/pages/category.html?cat=animals&sub=accessories' }
        ]
      },
      {
        title: 'Услуги',
        items: [
          { name: 'Вязка', url: '/pages/category.html?cat=animals&sub=breeding' },
          { name: 'Передержка', url: '/pages/category.html?cat=animals&sub=boarding' },
          { name: 'Груминг', url: '/pages/category.html?cat=animals&sub=grooming' },
          { name: 'Ветеринария', url: '/pages/category.html?cat=animals&sub=veterinary' },
          { name: 'Дрессировка', url: '/pages/category.html?cat=animals&sub=training' }
        ]
      }
    ]
  },

  kids: {
    title: 'Детский мир',
    url: '/pages/category.html?cat=kids',
    columns: [
      {
        title: 'Для малышей',
        items: [
          { name: 'Коляски', url: '/pages/category.html?cat=kids&sub=strollers' },
          { name: 'Кроватки', url: '/pages/category.html?cat=kids&sub=baby-beds' },
          { name: 'Автокресла', url: '/pages/category.html?cat=kids&sub=car-seats' },
          { name: 'Ходунки', url: '/pages/category.html?cat=kids&sub=walkers' },
          { name: 'Стульчики для кормления', url: '/pages/category.html?cat=kids&sub=feeding-chairs' }
        ]
      },
      {
        title: 'Игрушки и игры',
        items: [
          { name: 'Игрушки', url: '/pages/category.html?cat=kids&sub=toys' },
          { name: 'Конструкторы', url: '/pages/category.html?cat=kids&sub=constructors' },
          { name: 'Настольные игры', url: '/pages/category.html?cat=kids&sub=board-games' },
          { name: 'Куклы', url: '/pages/category.html?cat=kids&sub=dolls' },
          { name: 'Машинки', url: '/pages/category.html?cat=kids&sub=toy-cars' }
        ]
      },
      {
        title: 'Одежда и школа',
        items: [
          { name: 'Одежда', url: '/pages/category.html?cat=kids&sub=clothes' },
          { name: 'Обувь', url: '/pages/category.html?cat=kids&sub=shoes' },
          { name: 'Рюкзаки', url: '/pages/category.html?cat=kids&sub=backpacks' },
          { name: 'Школьные товары', url: '/pages/category.html?cat=kids&sub=school' },
          { name: 'Велосипеды', url: '/pages/category.html?cat=kids&sub=bicycles' }
        ]
      }
    ]
  },

  fashion: {
    title: 'Мода и стиль',
    url: '/pages/category.html?cat=fashion',
    columns: [
      {
        title: 'Одежда',
        items: [
          { name: 'Женская одежда', url: '/pages/category.html?cat=fashion&sub=women-clothes' },
          { name: 'Мужская одежда', url: '/pages/category.html?cat=fashion&sub=men-clothes' },
          { name: 'Верхняя одежда', url: '/pages/category.html?cat=fashion&sub=outerwear' },
          { name: 'Спортивная одежда', url: '/pages/category.html?cat=fashion&sub=sport-clothes' },
          { name: 'Домашняя одежда', url: '/pages/category.html?cat=fashion&sub=homewear' }
        ]
      },
      {
        title: 'Обувь',
        items: [
          { name: 'Кроссовки', url: '/pages/category.html?cat=fashion&sub=sneakers' },
          { name: 'Туфли', url: '/pages/category.html?cat=fashion&sub=shoes' },
          { name: 'Ботинки', url: '/pages/category.html?cat=fashion&sub=boots' },
          { name: 'Сандалии', url: '/pages/category.html?cat=fashion&sub=sandals' },
          { name: 'Детская обувь', url: '/pages/category.html?cat=fashion&sub=kids-shoes' }
        ]
      },
      {
        title: 'Аксессуары',
        items: [
          { name: 'Сумки', url: '/pages/category.html?cat=fashion&sub=bags' },
          { name: 'Часы', url: '/pages/category.html?cat=fashion&sub=watches' },
          { name: 'Украшения', url: '/pages/category.html?cat=fashion&sub=jewelry' },
          { name: 'Очки', url: '/pages/category.html?cat=fashion&sub=glasses' },
          { name: 'Ремни', url: '/pages/category.html?cat=fashion&sub=belts' }
        ]
      }
    ]
  },

  jobs: {
    title: 'Работа',
    url: '/pages/category.html?cat=jobs',
    columns: [
      {
        title: 'Вакансии',
        items: [
          { name: 'Продажи', url: '/pages/category.html?cat=jobs&sub=sales' },
          { name: 'Маркетинг', url: '/pages/category.html?cat=jobs&sub=marketing' },
          { name: 'IT', url: '/pages/category.html?cat=jobs&sub=it' },
          { name: 'Дизайн', url: '/pages/category.html?cat=jobs&sub=design' },
          { name: 'Логистика', url: '/pages/category.html?cat=jobs&sub=logistics' }
        ]
      },
      {
        title: 'Формат работы',
        items: [
          { name: 'Удалённая работа', url: '/pages/category.html?cat=jobs&sub=remote' },
          { name: 'Полный день', url: '/pages/category.html?cat=jobs&sub=fulltime' },
          { name: 'Подработка', url: '/pages/category.html?cat=jobs&sub=parttime' },
          { name: 'Стажировки', url: '/pages/category.html?cat=jobs&sub=internships' },
          { name: 'Для студентов', url: '/pages/category.html?cat=jobs&sub=students' }
        ]
      },
      {
        title: 'Для соискателей',
        items: [
          { name: 'Резюме', url: '/pages/category.html?cat=jobs&sub=cv' },
          { name: 'Советы по поиску', url: '/pages/category.html?cat=jobs&sub=tips' },
          { name: 'Работа без опыта', url: '/pages/category.html?cat=jobs&sub=no-experience' },
          { name: 'Временная работа', url: '/pages/category.html?cat=jobs&sub=temporary' },
          { name: 'Фриланс', url: '/pages/category.html?cat=jobs&sub=freelance' }
        ]
      }
    ]
  },

  hobby: {
    title: 'Хобби и спорт',
    url: '/pages/category.html?cat=hobby',
    columns: [
      {
        title: 'Спорт',
        items: [
          { name: 'Футбол', url: '/pages/category.html?cat=hobby&sub=football' },
          { name: 'Фитнес', url: '/pages/category.html?cat=hobby&sub=fitness' },
          { name: 'Велоспорт', url: '/pages/category.html?cat=hobby&sub=cycling' },
          { name: 'Теннис', url: '/pages/category.html?cat=hobby&sub=tennis' },
          { name: 'Единоборства', url: '/pages/category.html?cat=hobby&sub=martial-arts' }
        ]
      },
      {
        title: 'Хобби',
        items: [
          { name: 'Музыкальные инструменты', url: '/pages/category.html?cat=hobby&sub=music' },
          { name: 'Книги', url: '/pages/category.html?cat=hobby&sub=books' },
          { name: 'Коллекционирование', url: '/pages/category.html?cat=hobby&sub=collecting' },
          { name: 'Рисование', url: '/pages/category.html?cat=hobby&sub=drawing' },
          { name: 'Настольные игры', url: '/pages/category.html?cat=hobby&sub=board-games' }
        ]
      },
      {
        title: 'Активный отдых',
        items: [
          { name: 'Палатки', url: '/pages/category.html?cat=hobby&sub=tents' },
          { name: 'Рюкзаки', url: '/pages/category.html?cat=hobby&sub=backpacks' },
          { name: 'Удочки', url: '/pages/category.html?cat=hobby&sub=fishing' },
          { name: 'Самокаты', url: '/pages/category.html?cat=hobby&sub=scooters' },
          { name: 'Скейтборды', url: '/pages/category.html?cat=hobby&sub=skateboards' }
        ]
      }
    ]
  },

  repair: {
    title: 'Ремонт',
    url: '/pages/category.html?cat=repair',
    columns: [
      {
        title: 'Услуги',
        items: [
          { name: 'Электрик', url: '/pages/category.html?cat=repair&sub=electrician' },
          { name: 'Сантехник', url: '/pages/category.html?cat=repair&sub=plumber' },
          { name: 'Маляр', url: '/pages/category.html?cat=repair&sub=painter' },
          { name: 'Плиточник', url: '/pages/category.html?cat=repair&sub=tiler' },
          { name: 'Сборка мебели', url: '/pages/category.html?cat=repair&sub=furniture-assembly' }
        ]
      },
      {
        title: 'Материалы',
        items: [
          { name: 'Краска', url: '/pages/category.html?cat=repair&sub=paint' },
          { name: 'Обои', url: '/pages/category.html?cat=repair&sub=wallpaper' },
          { name: 'Плитка', url: '/pages/category.html?cat=repair&sub=tiles' },
          { name: 'Ламинат', url: '/pages/category.html?cat=repair&sub=laminate' },
          { name: 'Сухие смеси', url: '/pages/category.html?cat=repair&sub=mixes' }
        ]
      },
      {
        title: 'Инструменты',
        items: [
          { name: 'Дрели', url: '/pages/category.html?cat=repair&sub=drills' },
          { name: 'Шуруповёрты', url: '/pages/category.html?cat=repair&sub=screwdrivers' },
          { name: 'Перфораторы', url: '/pages/category.html?cat=repair&sub=rotary-hammers' },
          { name: 'Лобзики', url: '/pages/category.html?cat=repair&sub=jigsaws' },
          { name: 'Наборы инструментов', url: '/pages/category.html?cat=repair&sub=tool-kits' }
        ]
      }
    ]
  }
};
function renderSubcategories(categoryKey) {
  const category = categoriesData[categoryKey];

  if (!category) {
    subcats.innerHTML = '<p>Категория не найдена</p>';
    return;
  }

  const columnsHtml = category.columns
    .map((column) => {
      const itemsHtml = column.items
        .map((item) => `<li><a href="${item.url}">${item.name}</a></li>`)
        .join('');

      return `
        <div class="subcats-column">
          <h3>${column.title}</h3>
          <ul>${itemsHtml}</ul>
        </div>
      `;
    })
    .join('');

  subcats.innerHTML = `
    <h2 class="subcats-title">
      <a href="${category.url}">${category.title}</a>
    </h2>
    <div class="subcats-grid">
      ${columnsHtml}
    </div>
  `;
}

function openMega() {
  mega.classList.add('open');
  overlay.classList.add('open');
}

function closeMega() {
  mega.classList.remove('open');
  overlay.classList.remove('open');
}

function toggleMega() {
  mega.classList.toggle('open');
  overlay.classList.toggle('open');
}

if (catBtn && mega && overlay && subcats) {
  catBtn.addEventListener('click', toggleMega);
  overlay.addEventListener('click', closeMega);

  catItems.forEach((item) => {
    item.addEventListener('click', () => {
      catItems.forEach((btn) => btn.classList.remove('active'));
      item.classList.add('active');
      renderSubcategories(item.dataset.cat);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMega();
    }
  });

  renderSubcategories('transport');
}


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

  const input = document.getElementById('searchInput');
  renderHomeProducts(input ? input.value : '');
}

function renderHomeProducts(searchValue = '') {
  const container = document.getElementById('homeCards');
  if (!container) return;

  const allProducts = getAllProducts();
  const favorites = getFavorites();
  const value = searchValue.trim().toLowerCase();

 const filteredProducts = allProducts.filter(item => {
  const title = (item.title || '').toLowerCase();
  return title.includes(value);
});

  if (!filteredProducts.length) {
    container.innerHTML = '<p>Ничего не найдено</p>';
    return;
  }

 container.innerHTML = filteredProducts.map(item => `
  <div class="card">
    <a href="./pages/product.html?id=${item.id}" class="card-photo">
      <img src="${item.image}" alt="${item.title}" class="img-card">
    </a>

    <button class="like-btn" data-id="${item.id}" type="button">
      ${favorites.includes(item.id) ? '❤️' : '🤍'}
    </button>

    <a href="./pages/product.html?id=${item.id}" class="card-title-link">
      <span class="name-card">${item.title}</span>
    </a>

    <span class="count"><strong>${item.price.toLocaleString()} Тг</strong></span>
    <span class="country-card">Казахстан, ${item.city}</span>
  </div>
`).join('');
}

function setupSearch() {
  const input = document.getElementById('searchInput');
  const button = document.getElementById('searchBtn');

  if (!input || !button) return;

  function handleSearch() {
    renderHomeProducts(input.value);
  }

  button.addEventListener('click', handleSearch);
  input.addEventListener('input', handleSearch);
}

document.addEventListener('click', (e) => {
  const likeBtn = e.target.closest('.like-btn');

  if (likeBtn) {
    toggleFavorite(Number(likeBtn.dataset.id));
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderHomeProducts();
  setupSearch();
});