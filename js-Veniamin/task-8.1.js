/**
 * Пример 8 - Тернарный оператор
 * Перепишите if...else с использованием тернарного оператора.
 */

const a = 1;
const b = 2;
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

const result = (a + b < 4)
  ? 'Мало'
  : 'Много';

console.log(result);