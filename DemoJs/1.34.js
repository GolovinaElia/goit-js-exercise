// МЕТОДИ TOLOWERCASE() І TOUPPERCASE()
// Бувають ситуації, коли всі символи в рядку необхідно
//  перетворити в один регістр, верхній або нижній.
//  Наприклад, під час пошуку за ключовим словом, 
// коли користувач вводить рядок 'saMsUng', а порівняти її потрібно з рядком 'samsung' або 'SAMSUNG'.

// console.log("saMsUng" === "samsung"); // false
// console.log("saMsUng" === "SAMSUNG"); // false
// Щоб не вимагати абсолютно точне введення, можна зробити
//  «нормалізацію» введеного користувачем рядка, тобто 
// перетворити всі його символи у верхній або нижній регістр. 
// Методи рядка toLowerCase() і toUpperCase() повернуть новий рядок у відповідному регістрі, не змінюючи оригінальний.

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true
// Функція normalizeInput(input) приймає рядок (параметр input)
//  і повертає такий самий рядок, але в нижньому регістрі.
//  Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

// Оголошена функція normalizeInput(input)
// Виклик функції normalizeInput("Hello world") повертає "hello world"
// Виклик функції normalizeInput("This ISN'T SpaM") повертає "this isn't spam"
// Виклик функції normalizeInput("Big SALE") повертає "big sale"

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}