// ЛОГІЧНЕ «І» (ОПЕРАТОР &&)
// Логічні оператори використовуються для
//  перевірки умов з багатьма виразами, наприклад у розгалуженнях.

// Оператор && приводить всі операнди до буля
//  і повертає значення одного з них. Лівий
//  операнд, якщо його можна привести до false, і правий - в інших випадках.

// вираз && вираз
// У наступному прикладі обидві умови повернуть
//  true, тому результатом всього виразу буде true - повернеться значення правого операнда.

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true
// Якщо хоча б один з операндів буде приведений до false, результатом виразу буде цей операнд.

// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false
// Тобто логічне «І» запинається на хибності і повертає те, на чому запнувся або останній операнд.

// console.log(true && false); // false
// console.log(false && true); // false
// console.log(true && true); // true

// console.log(3 && false); // false
// console.log(false && 3); // false
// console.log(3 && true); // true
// console.log(true && 3); // 3
// Корисно
// Запам'ятайте шість значень, які в булевому
//  перетворенні приводяться до `false`: `0`, `NaN`, `null`, `undefined`,
//  порожній рядок `""` або `''` і саме значення `false`. Абсолютно все інше приводиться до `true`.

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ''
// console.log("Mango" && ""); // true && false -> ''
// console.log("Mango" && "Poly"); // true && true -> 'Poly'
// console.log("Poly" && "Mango"); // true && true -> 'Mango'
// Функція isNumberInRange(start, end, number) перевіряє,
//  чи входить число у проміжок. Вона оголошує три параметри,
//  значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isInRange вираз перевірки входження number
//  у числовий проміжок від start до end. Тобто число повинно
//  бути більшим або дорівнювати start, і меншим або дорівнювати end.
//  Результатом виразу перевірки буде буль true або false.

// Оголошена функція isNumberInRange(start, end, number)
// У виразі перевірки використаний оператор &&
// Виклик isNumberInRange(10, 30, 17) повертає true
// Виклик isNumberInRange(10, 30, 5) повертає false
// Виклик isNumberInRange(20, 50, 24) повертає true
// Виклик isNumberInRange(20, 50, 76) повертає false

function isNumberInRange(start, end, number) {
  const isInRange = (number >= start && number <= end) ; // Change this line

  return isInRange;
}

