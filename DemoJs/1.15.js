// ІНСТРУКЦІЯ IF...ELSE
// Розгалуження використовуються для виконання різного коду, залежно від умови. Принцип роботи простий - результат виразу в умові блоку if приводиться до буля true або false.

// if (умова) {
//   // тіло if
// } else {
//   // тіло else
// }
// Якщо умова приводиться до true, то виконується код у фігурних дужках тіла if, а блок else ігнорується.

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100
// Якщо умова приводиться до false, код блоку if буде пропущений,
//  і виконається код у фігурних дужках після блоку else.

// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0
// Додай вираз перевірки повноліття користувача,
//  значення параметра age, в умову для інструкції if.

// Якщо користувач повнолітній, повинен виконуватися
//  блок if і у змінну message записується рядок "You are an adult".
// В іншому випадку повинен виконуватися блок else
//  і записується рядок "You are a minor".
// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=
// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"

function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}
