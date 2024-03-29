// ОПЕРАТОР BREAK
// Перервати виконання циклу можна в будь-який момент.
//  Для цього існує оператор break, який повністю 
// припиняє виконання циклу і передає управління на рядок за його тілом.

// У прикладі шукаємо число 3. Щойно виконається
//  умова if, цикл припинить своє виконання (буде перерваний).

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");
// Доповни код таким чином, щоб у змінну number
//  записувалося перше число від start до end, яке ділиться на 5 без остачі.

// Оголошена змінна start зі значенням 6
// Оголошена змінна end зі значенням 27
// Оголошена змінна number без ініціалізації
// Підсумкове значення змінної number дорівнює 10
// В циклі for використовується break для виходу до завершення усіх ітерацій циклу

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}