// ## Example 7 - Опертор % та методы рядків

// Напиши код який переводить значення`totalMinutes`(кількість хвилин) в формат
//  `HH:MM`

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
