// ОПЕРАТОРИ ПОРІВНЯННЯ >, >=, < І <=
// Використовується для порівняння двох значень.
//  Результатом свого виконання повертають буль - true або false, тобто «так» або «ні».

// > - більше
// < - менше
// >= - більше або дорівнює
// <= - менше або дорівнює
// const a = 2;
// const b = 5;

// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false
// Функція isAdult оголошує один параметр age (вік),
//  значення якого буде задаватися під час її виклику.
//  Присвой змінній passed вираз перевірки віку користувача на повноліття.
//  Людина вважається повнолітньою у віці 18 років і старше.

// Оголошена функція isAdult(age)
// У виразі перевірки використовується оператор >=
// Виклик isAdult(20) повертає true
// Виклик isAdult(14) повертає false
// Виклик isAdult(8) повертає false
// Виклик isAdult(37) повертає true

function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}