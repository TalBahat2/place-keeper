'use strict'

const gForecast = [
    'You will find your true love today.',
    'Be carefull from obstacles today.',
    'It will be difficult for you to keep things in proportions today.'
]

function save(bgColor, birthDate, birthTime, email, age) {
    saveToStorage('userData', {bgColor, birthDate, birthTime, email, age});
}

function getForecast() {
    return gForecast[getRandomInt(0, gForecast.length)];
}