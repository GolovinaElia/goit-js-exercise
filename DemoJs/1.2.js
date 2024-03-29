// ПЕРЕВИЗНАЧЕННЯ ЗНАЧЕННЯ ЗМІННОЇ
// Для того щоб оголосити змінну, якій у майбутньому можна
//  буде присвоїти нове значення, використовується ключове слово let.
//  Створення змінної без ключового слова let або const призведе до помилки.

// let age = 5;
// age = 10;

// let username = "Mango";
// username = "Poly";
// Спроба звернутися до змінної за ім'ям до її оголошення, викличе помилку.

// Наприклад, не можна намагатися прочитати або змінити значення змінної до її оголошення:

// // ❌ Неправильно, буде помилка
// age = 15; // ReferenceError: Cannot access 'age' before initialization
// console.log(age); // ReferenceError: age is not defined

// // Оголошення змінної age
// let age = 20;

// // ✅ Правильно, звертаємося після оголошення
// age = 25;
// console.log(age); // 25
// Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів.
//  Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// Змінна pricePerItem оголошена за допомогою let
// При оголошенні змінної pricePerItem присвоєно значення — число 2000
// Змінній pricePerItem присвоєно нове значення, більше за попереднє на 1500
// Змінна productName оголошена за допомогою let
// При оголошенні змінної productName присвоєно значення — рядок "Droid"
// Змінній productName присвоєно нове значення — рядок "Repair droid"

let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line
productName = "Repair droid";
pricePerItem = 3500;