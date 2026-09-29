const loginForm = document.getElementById('loginForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

const signupForm = document.getElementById('signupForm');
const signupName = document.getElementById('signupName');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');

const errorBox = document.getElementById('eror');

const STORAGE_KEY = 'adifyUser';

function showMessage(text, type) {
    errorBox.textContent = text;
    errorBox.classList.remove('eror', 'success');
    errorBox.classList.add(type);
}

function clearMessage() {
    errorBox.textContent = '';
    errorBox.classList.remove('eror', 'success');
}

function clearFieldState(...fields) {
    fields.forEach((field) => {
        field.classList.remove('eror', 'success');
    });
}

function markError(field, message) {
    field.classList.remove('success');
    field.classList.add('eror');
    showMessage(message, 'eror');
}

function markSuccess(field) {
    field.classList.remove('eror');
    field.classList.add('success');
}

function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    clearMessage();

    clearFieldState(signupName, signupEmail, signupPassword);

    const nameValue = signupName.value.trim();
    const emailValue = signupEmail.value.trim();
    const passwordValue = signupPassword.value.trim();

    if (nameValue === '') {
        markError(signupName, 'Введите имя');
        return;
    }
    markSuccess(signupName);

    if (emailValue === '') {
        markError(signupEmail, 'Введите email');
        return;
    }

    if (!isValidEmail(emailValue)) {
        markError(signupEmail, 'Email введён неправильно');
        return;
    }
    markSuccess(signupEmail);

    if (passwordValue === '') {
        markError(signupPassword, 'Введите пароль');
        return;
    }

    if (passwordValue.length < 6) {
        markError(signupPassword, 'Пароль должен быть не короче 6 символов');
        return;
    }
    markSuccess(signupPassword);

    const savedUser = getFromStorage(STORAGE_KEY);

    if (savedUser && savedUser.email === emailValue) {
        markError(signupEmail, 'Пользователь с таким email уже существует');
        return;
    }

    const userData = {
        name: nameValue,
        email: emailValue,
        password: passwordValue
    };

    saveStorage(STORAGE_KEY, userData);
    saveStorage('isAuth', true);

    showMessage('Регистрация прошла успешно', 'success');

    setTimeout(() => {
        window.location.href = "../index.html";
    }, 700);
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    clearMessage();

    clearFieldState(loginEmail, loginPassword);

    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value.trim();

    if (emailValue === '') {
        markError(loginEmail, 'Введите email');
        return;
    }

    if (!isValidEmail(emailValue)) {
        markError(loginEmail, 'Email введён неправильно');
        return;
    }
    markSuccess(loginEmail);

    if (passwordValue === '') {
        markError(loginPassword, 'Введите пароль');
        return;
    }

    const savedUser = getFromStorage(STORAGE_KEY);

    if (!savedUser) {
        showMessage('Сначала зарегистрируйтесь', 'eror');
        return;
    }

    if (emailValue !== savedUser.email) {
        markError(loginEmail, 'Неверный email');
        return;
    }

    if (passwordValue !== savedUser.password) {
        markError(loginPassword, 'Неверный пароль');
        return;
    }

    markSuccess(loginPassword);

    saveStorage('isAuth', true);
    showMessage(`Вы успешно вошли, ${savedUser.name}`, 'success');

    setTimeout(() => {
        window.location.href = "../index.html";
    }, 700);
});