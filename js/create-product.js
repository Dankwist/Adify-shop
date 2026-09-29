const categoryMap = {
  transport: 'Транспорт',
  electronics: 'Электроника',
  home: 'Дом и сад',
  animals: 'Животные',
  kids: 'Детский мир',
  fashion: 'Мода и стиль',
  jobs: 'Работа',
  hobby: 'Хобби и спорт',
  repair: 'Строительство и ремонт'
};

let selectedCategory = '';

function openCategoryModal() {
  const modal = document.getElementById('categoryModal');
  if (modal) modal.classList.add('open');
}

function closeCategoryModal() {
  const modal = document.getElementById('categoryModal');
  if (modal) modal.classList.remove('open');
}

function selectCategory(categoryKey) {
  selectedCategory = categoryKey;

  const categoryBtn = document.getElementById('categorySelectBtn');
  const hiddenInput = document.getElementById('selectedCategory');

  if (categoryBtn) {
    categoryBtn.textContent = categoryMap[categoryKey] || 'Выберите категорию';
  }

  if (hiddenInput) {
    hiddenInput.value = categoryKey;
  }

  closeCategoryModal();
}

function updateCounters() {
  const title = document.getElementById('productTitle');
  const desc = document.getElementById('productDescription');
  const titleCounter = document.getElementById('titleCounter');
  const descCounter = document.getElementById('descCounter');

  if (title && titleCounter) {
    titleCounter.textContent = `${title.value.length}/70`;
  }

  if (desc && descCounter) {
    descCounter.textContent = `${desc.value.length}/9000`;
  }
}

function clearErrors() {
  const title = document.getElementById('productTitle');
  const desc = document.getElementById('productDescription');
  const titleError = document.getElementById('titleError');
  const descError = document.getElementById('descError');

  if (title) title.classList.remove('input-error');
  if (desc) desc.classList.remove('input-error');
  if (titleError) titleError.textContent = '';
  if (descError) descError.textContent = '';
}

function createProductObject() {
  const title = document.getElementById('productTitle')?.value.trim() || '';
  const description = document.getElementById('productDescription')?.value.trim() || '';
  const city = document.getElementById('productCity')?.value.trim() || '';
  const contactName = document.getElementById('contactName')?.value.trim() || '';
  const contactEmail = document.getElementById('contactEmail')?.value.trim() || '';
  const phone = document.getElementById('contactPhone')?.value.trim() || '';
  const condition = document.getElementById('productCondition')?.value || 'Новый';
  const price = Number(document.getElementById('productPrice')?.value) || 0;
  const autoRenew = document.getElementById('autoRenew')?.checked || false;

  return {
    id: Date.now(),
    title,
    category: selectedCategory,
    subcategory: '',
    city,
    condition,
    price,
    description,
    image: uploadedImages[0] || '../img/default.png',
    contactName,
    contactEmail,
    phone,
    autoRenew,
    createdAt: new Date().toISOString()
  };
}

function validateProduct(product) {
  clearErrors();

  const title = document.getElementById('productTitle');
  const desc = document.getElementById('productDescription');
  const titleError = document.getElementById('titleError');
  const descError = document.getElementById('descError');

  let isValid = true;

  if (!product.title || product.title.length < 5) {
    if (title) title.classList.add('input-error');
    if (titleError) titleError.textContent = 'Введите название минимум из 5 символов';
    isValid = false;
  }

  if (!product.category) {
    alert('Выберите категорию');
    isValid = false;
  }

  if (!product.description || product.description.length < 10) {
    if (desc) desc.classList.add('input-error');
    if (descError) descError.textContent = 'Введите описание минимум из 10 символов';
    isValid = false;
  }

  if (!product.city) {
    alert('Укажите местоположение');
    isValid = false;
  }

  if (!product.contactName) {
    alert('Укажите контактное лицо');
    isValid = false;
  }

  if (!product.phone) {
    alert('Укажите номер телефона');
    isValid = false;
  }

  if (!product.price || product.price <= 0) {
    alert('Укажите цену');
    isValid = false;
  }

  return isValid;
}

function saveCreatedProduct(product) {
  const createdProducts = getFromStorage('createdProducts') || [];
  createdProducts.push(product);
  saveStorage('createdProducts', createdProducts);
}

function publishProduct() {
  const product = createProductObject();

  if (!validateProduct(product)) return;

  saveCreatedProduct(product);
  alert('Объявление опубликовано');

  window.location.href = `../pages/category.html?cat=${product.category}`;
}

function setupCategorySearch() {
  const input = document.getElementById('categorySearch');
  const items = document.querySelectorAll('.category-item');

  if (!input) return;

  input.addEventListener('input', () => {
    const value = input.value.trim().toLowerCase();

    items.forEach((item) => {
  const title = item.querySelector('.category-title');
  const text = title ? title.textContent.toLowerCase() : item.textContent.toLowerCase();
  item.style.display = text.includes(value) ? 'flex' : 'none';
        });
  });
}



// фото


const uploadedImages = [];

function setupPhotoUpload() {
  const addPhotoBtn = document.getElementById('addPhotoBtn');
  const photoInput = document.getElementById('photoInput');
  const photoBoxes = document.querySelectorAll('#photoGrid .photo-box');

  if (!addPhotoBtn || !photoInput || !photoBoxes.length) return;

  addPhotoBtn.addEventListener('click', () => {
    photoInput.click();
  });

  photoInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    const freeSlots = 8 - uploadedImages.length;
    const filesToAdd = files.slice(0, freeSlots);

    filesToAdd.forEach((file) => {
      if (!file.type.startsWith('image/')) return;

      const reader = new FileReader();

      reader.onload = function (event) {
        uploadedImages.push(event.target.result);
        renderPhotoBoxes();
      };

      reader.readAsDataURL(file);
    });

    photoInput.value = '';
  });
}

function renderPhotoBoxes() {
  const photoBoxes = document.querySelectorAll('#photoGrid .photo-box');

  photoBoxes.forEach((box, index) => {
    if (uploadedImages[index]) {
      box.innerHTML = `<img src="${uploadedImages[index]}" alt="Фото объявления">`;
    } else {
      box.innerHTML = index === 0 ? 'Добавить фото' : '📷';
    }
  });
}









document.addEventListener('DOMContentLoaded', () => {
  const categoryBtn = document.getElementById('categorySelectBtn');
  const closeBtn = document.getElementById('closeCategoryModal');
  const publishBtn = document.getElementById('publishBtn');
  const previewBtn = document.getElementById('previewBtn');
  const title = document.getElementById('productTitle');
  const desc = document.getElementById('productDescription');
  const modal = document.getElementById('categoryModal');

  if (categoryBtn) {
    categoryBtn.addEventListener('click', openCategoryModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCategoryModal);
  }

  if (publishBtn) {
    publishBtn.addEventListener('click', publishProduct);
  }

  if (previewBtn) {
    previewBtn.addEventListener('click', previewProduct);
  }

  if (title) {
    title.addEventListener('input', updateCounters);
  }

  if (desc) {
    desc.addEventListener('input', updateCounters);
  }

  document.querySelectorAll('.category-item').forEach((item) => {
    item.addEventListener('click', () => {
      selectCategory(item.dataset.category);
    });
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeCategoryModal();
      }
    });
  }

  setupCategorySearch();
  updateCounters();
  setupPhotoUpload();
});