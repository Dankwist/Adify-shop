function getFromStorage(key){
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
}

function saveStorage(key, value){
localStorage.setItem(key, JSON.stringify(value))
}

function clearStorage(key){
        localStorage.removeItem(key)
}