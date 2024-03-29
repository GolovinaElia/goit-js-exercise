// ТЕРНАРНИЙ ОПЕРАТОР
// Тернарний оператор використовується як синтаксично коротша заміна інструкції if...else, коли одній і тій самій змінній необхідно присвоїти різні значення за умовою.

// <умова> ? <вираз, якщо умова істинна> : <вираз, якщо умова хибна>
// Працює за такою схемою:

// Обчислюється умова.
// Якщо умова істинна, тобто приводиться до true, обчислюється вираз після ?.
// Якщо умова хибна, тобто приводиться до false, обчислюється вираз після :.
// Значення обчисленого виразу повертається як результат роботи тернарного оператора.
// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"
// Виконаємо рефакторинг, замінивши if...else тернарним оператором.

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"
// Увага
// Тернарний оператор повинен використовуватися у
//  простих операціях присвоєння або повернення.
//  Застосовувати його для заміни складних розгалужень - погана практика (антипатерн).

// Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

// Оголошена функція checkStorage(available, ordered).
// Використаний тернарний оператор.
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 150) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
message = (ordered > available) ? "Not enough goods in stock!":
  "The order is accepted, our manager will contact you";
  

  // Change code above this line
  return message;
}