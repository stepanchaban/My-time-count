const daysWords = {
  one: 'День',
  few: 'Дня',
  many: 'Дней'
}

const hoursWords = {
  one: 'Час',
  few: 'Часа',
  many: 'Часов'
}

const minutesWords = {
  one: 'Минута',
  few: 'Минуты',
  many: 'Минут'
}

const secondWords = {
  one: 'Секунда',
  few: 'Секунды',
  many: 'Секунд'
}

//Передаю значение

const newDeveloper = new Date('Jun 8 2023');
//Обращаюсь к каскаду
const daysVal = document.querySelector('.time-count__days .time-count__val');
const hoursVal = document.querySelector('.time-count__hours .time-count__val');
const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

const daysText = document.querySelector('.time-count__days .time-count__text');
const hoursText = document.querySelector('.time-count__hours .time-count__text');
const minutesText = document.querySelector('.time-count__minutes .time-count__text');
const secondsText = document.querySelector('.time-count__seconds .time-count__text');

const countdownElement = document.querySelector('.time-count__content');


function declOfNum2(number, words) {
  let result = new Intl.PluralRules("ru-RU").select(number);
  return words[result];
}

let time;

//Ищу текущее значение
const timeCount = () => {
  let now = new Date();
  let isNewDate = time ? new Date(time) : null;

  console.log(isNewDate, newDeveloper);

  let trueDay = isNewDate || newDeveloper;
  //Осталось до
  let leftUntil = trueDay - now;

  //Получаю значение в миллисекундах
  let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
  let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
  let seconds = Math.floor(leftUntil / 1000) % 60;

  daysVal.textContent = days;
  hoursVal.textContent = hours;
  minutesVal.textContent = minutes;
  secondsVal.textContent = seconds;

  daysText.textContent = declOfNum2(days, daysWords);
  hoursText.textContent = declOfNum2(hours, hoursWords);
  minutesText.textContent = declOfNum2(minutes, minutesWords);
  secondsText.textContent = declOfNum2(seconds, secondWords);

  if (leftUntil < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = '<h2 class="expired">Время вышло</h2>';
  }
};
//Вызов функции
timeCount();

let countdown = setInterval(timeCount, 1000);

const formEl = document.getElementById('my-form');
formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const myNumberInput = formEl.elements['my-input'];
  time = myNumberInput.value.replace('-', '.');
}); 



const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const toggleThemeImage = document.getElementById('toggle-theme-image');

toggleThemeBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    toggleThemeImage.src = 'img/moon.png'
  } else {
    document.body.classList.add('dark');
    toggleThemeImage.src = 'img/sun.png'
  }
});
