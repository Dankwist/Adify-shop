const defaultProducts = [
  {
    id: 1,
    title: 'iPhone 13 Pro',
    category: 'electronics',
    subcategory: 'smartphones',
    city: 'Алматы',
    condition: 'Б/у',
    price: 124000,
    image: '/img-random/айфон13.png'
  },
  {
    id: 2,
    title: 'Сапоги',
    category: 'fashion',
    subcategory: 'boots',
    city: 'Алматы',
    condition: 'Новый',
    price: 35000,
    image: '/img-random/сапоги.png'
  },
  {
    id: 3,
    title: 'Пиджак женский',
    category: 'fashion',
    subcategory: 'women-clothes',
    city: 'Костанай',
    condition: 'Как новый',
    price: 49900,
    image: '/img-random/пиджак.png'
  },
  {
    id: 4,
    title: 'Пластинка I AM MUSIC',
    category: 'hobby',
    subcategory: 'music',
    city: 'Алматы',
    condition: 'Новый',
    price: 38000,
    image: '/img-random/пластинка.png'
  },
  {
    id: 5,
    title: 'Футболка от Travis Scott',
    category: 'fashion',
    subcategory: 'men-clothes',
    city: 'Алматы',
    condition: 'Новый',
    price: 12000,
    image: '/img-random/shirt-travis.png'
  },
  {
    id: 6,
    title: 'Скейтборд',
    category: 'hobby',
    subcategory: 'skateboards',
    city: 'Алматы',
    condition: 'Б/у',
    price: 7000,
    image: '/img-random/скейт.png'
  },
  {
    id: 7,
    title: 'Выезд электрика на дом',
    category: 'repair',
    subcategory: 'electrician',
    city: 'Алматы',
    condition: 'Новый',
    price: 5000,
    image: '/img-random/электрик.png'
  },
  {
    id: 8,
    title: 'Трактор б/у',
    category: 'transport',
    subcategory: 'suv',
    city: 'Алматы',
    condition: 'Б/у',
    price: 5400000,
    image: '/img-random/трактор.png'
  }
];

function normalizeCreatedProductImage(imagePath) {
  if (!imagePath) return './img/default.png';

  if (imagePath.startsWith('data:image')) return imagePath;
  if (imagePath.startsWith('./')) return imagePath;
  if (imagePath.startsWith('../')) return imagePath.replace('../', './');

  return imagePath;
}

function getCreatedProducts() {
  const createdProducts = getFromStorage('createdProducts') || [];

  return createdProducts.map(product => ({
    ...product,
    image: normalizeCreatedProductImage(product.image)
  }));
}

function getAllProducts() {
  return [...defaultProducts, ...getCreatedProducts()];
}