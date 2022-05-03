// Скільки значень після дробу?
const number = 12.959;
// let num = number.toString().split(".").length;
// console.log(num);
let result = number % 1;
// let roundResult = Math.round(result) 
let roundResult = result.toFixed(3);
console.log(roundResult);
// Если необходимо перевести число 25.35 на 25,35, то используется метод toLocaleString() (чисто визуально)
console.log((25.35).toLocaleString())
const num = 12.45;
const sum = num + 10;
const convertedNumber = sum.toLocaleString("uk-Ua");
console.log(convertedNumber);