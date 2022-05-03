// # Модуль 1. Занятя 1.

// ## Example 1 - Базові математичні операції

// Виведи на екран загальну кількість яблук і винограду. Різницю яблук та винограду

const apples = 47;
const grapes = 135;
const total = apples + grapes; // 47 + 135 = 182
console.log(total);
const diff = apples - grapes; // 47 - 135 = -88
console.log(diff);





// ## Example 3 - Розгалуження

// Напишіть код що виводить в консоль рядок "Це додатнє число" якщо користувач ввів в prompt число що більше за 0
// Якщо користувач ввів 0 то рядок "Це нуль". Якщо користувач ввів відємне число виводити на екран рядок "Це відємне число"

// ```js
// const userInput = prompt("Введіть число");
// // > < >= <= === ==
// if (userInput > 0) {
//   console.log("Це додатнє число");
// } else if (userInput < 0) {
//   console.log("Це відємне число");
// } else if (Number(userInput) === 0) {
//   // "0" === 0
//   console.log("Це нуль");
// } else {
//   console.log("Користувач ввів не число");
// }

// switch (true) {
//   case userInput > 0:
//     console.log("Це додатнє число");
//     break;
//   case userInput < 0:
//     console.log("Це відємне число");
//     break;
//   case Number(userInput) === 0:
//     console.log("Це нуль");
//     break;
//   default:
//     console.log("Користувач ввів не число");
//     break;
// }

// ```

// ## Example 4 - if...else і логічні оператори

// Напишіть код що буде виводити в консоль браузера рядок в залежності від значення змінної "hours"

// Якщо занчення зміної `hours`:

// - меньше `17`, виводимо рядок `"Pending"`
// - більше чи доріврнює `17` і меньше чи дорівнює 24, виводимо рядок `"Expires"`
// - більше `24` , виводимо рядок `"Overdue"`

// ```js
// const hours = 0;

// if (hours < 17) {
//   alert(`${hours} is pending`);
// } else if (hours >= 17 && hours <= 24) {
//   alert("Expires");
// } else {
//   alert("Overdue");
// }

// ```

// ## Example 5 - Дедлайн здачі проекта(if...else)

// Напиши код для відображення часу дедлайна здачі проекта. Використовуй if else

// - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
// - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
// - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
// - Якщо до дедлайну 3+ днів - виведи рядок `"Ще не скоро )"`

// ```js
const daysUntilDeadline = 2;

// if (daysUntilDeadline === 0) {
//   console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Післязавтра");
// } else {
//   console.log("Ще не скоро )");
// }
// ```

// ## Example 6 - Переписати задачу 5 на Switch
// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сьогодні");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Післязавтра");
//     break;
//   default:
//     console.log("Ще не скоро )");
//     break;
// }
// ## Example 7 - Цикл for

// змінна що відповідає за старт циклу
// умова що відповідає за припинення циклу
// код який наближає закінчення циклу

// for (let i = 1; i < 10; i += 1) {
//   console.log(i);
// }

// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i += 1;
// }
// let i = 0;
// i++; console.log(i) // 0
// console.log(i) // 1
// ++i; console.log(i) // 1

// let i = 0;
// i = i + 1; // 1
// i += 1;
// i++;

// i - +1;
// i--;
// i = i - 1;

// i = 1 => 1 < 10 => console.log(1) => i + 1
// i = 2 => 2 < 10 => console.log(2) => i + 1
// 3
// 4
// 5
// 6
// 7
// 8
// i = 8 => 8 < 10 => console.log(8) => i + 1
// i = 10 => 10 < 10 ///

// Написати цикл що виводить в консоль числа від меньшого до більшого в діапазоні від min до max
// але лише ті що кратні 5-ти

// ```js
// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = min; i <= max; i += 5) {
//   console.log(i);
// }
// ```

// ## Example 8
//  Написати гру камінь - ножиці - папір
// Де компютер загадує своє значення
// Користувач вводить свій варіант
// І потім ми бачимо хто переміг

// 1) Дізнатися варіант компютера
// 2) Дізнатися варіант користувача
// 3) Перевірити і визначити переможця

// console.log(Math.random()); // min = 0 max 1
// let computerChoise = "";
// const number = Math.random();
// if (number < 0.33) {
//   computerChoise = "камінь";
// } else if (number >= 0.33 && number <= 0.66) {
//   computerChoise = "ножиці";
// } else {
//   computerChoise = "папір";
// }

// let userChoise = prompt("Введіть свій варіант");

// if (userChoise === computerChoise) {
//   console.log("Нічия");
// } else if (
//   (userChoise === "ножиці" && computerChoise === "папір") ||
//   (userChoise === "камінь" && computerChoise === "ножиці") ||
//   (userChoise === "папір" && computerChoise === "камінь")
// ) {
//   console.log("Виграв юзер");
// } else {
//   console.log(`Виграв компютер і він вибрав ${computerChoise}`);
// }