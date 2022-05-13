// ОГОЛОШЕННЯ І ВИКЛИК ФУНКЦІЇ
// Функція - це підпрограма, незалежна частина коду,
//  призначена для багаторазового виконання конкретної задачі з різними початковими значеннями.

// Функцію можна уявити як чорний ящик — вона
//  отримує щось на вході (дані), і повертає щось на виході (результат виконання коду всередині неї).

// // 1. Оголошення функції multiply
// function multiply() {
//   // Тіло функції
//   console.log("multiply function invocation");
// }

// // 2. Виклики функції multiply
// multiply(); // multiply function invocation
// multiply(); // multiply function invocation
// multiply(); // multiply function invocation
// Оголошення функції починається з ключового слова function,
//  за яким йде її ім'я — дієслово, що відповідає на питання
//  «Що зробити?» і пара круглих дужок.
//  Тіло функції береться у фігурні дужки {} і містить інструкції,
//  які необхідно виконати під час її виклику. Потім, коли необхідно,
//  функція викликається за допомогою імені та пари круглих дужок.

// Оголоси функцію sayHi, всередині якої додай console.log()
//  з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.

// Очікується оголошення функції
// Функції присвоєно ім'я sayHi
// В тілі функції sayHi є console.log("Hello, this is my first function!")
// Після оголошення є виклик функції sayHi

// Change code below this line
function sayHi() {
    console.log("Hello, this is my first function!")
}
sayHi();