// ## Example 2 - Показувати час(if...else)

// Напишіть код для відображення годин і хвилин в консоль браузера в вигляді рядка в форматі "14 год 26 хв"
// Якщо значення хвилин "0" тоді показувати лише "14 год"

const hours = 14;
const minutes = 26;
let timeString;
if (minutes > 0) {
  timeString = `${hours} год ${minutes} хв`;
} else {
  timeString = `${hours} год`;
}
