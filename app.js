const select = document.querySelector('select');
const allLang = ['ru', 'en', 'fr'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    changeLanguage(); // Вместо перезагрузки просто вызываем функцию смены языка
}

function changeLanguage() {
    let hash = window.location.hash.substr(1);
    if (!allLang.includes(hash)) {
        hash = 'en'; // По умолчанию английский
        location.href = window.location.pathname + '#en';
    }

    select.value = hash;

    document.querySelector('title').innerHTML = langArr['unit'][hash];

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();
