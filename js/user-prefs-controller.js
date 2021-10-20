'use strict'

function onSave(ev) {
    ev.preventDefault();

    const bgColor = document.querySelector('[name=bgColor]').value;
    const elBody = document.querySelector('body');
    elBody.style.backgroundColor = bgColor;
    
    const birthDate = document.querySelector('[name=birthDate]').value;
    const birthTime = document.querySelector('[name=birthTime]').value;
    const email = document.querySelector('[name=email]').value;
    const age = document.querySelector('[name=age]').value;
    const elForecast = document.querySelector('.forecast');
    elForecast.innerText = getForecast();
    save(bgColor, birthDate, birthTime, email, age);
}