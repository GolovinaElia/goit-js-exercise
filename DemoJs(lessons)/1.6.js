// ## Example 6 - Оператори порівняння і приведення типів

// Яким буде результат виконання коду?

console.log(5 > 4); // true
console.log(10 >= "7"); // true, потому что ряд конвертируется в число и число 10 больше числа 7
console.log(10 >= "7px"); // false, потому что нельзя конвертировать пиксели
console.log("2" > "12"); // true, потому что два ряда не ковертируются в числа и сравниваются посимвольно и 2 > 1
console.log('2' < '12'); // false
console.log("4" == 4); // true
console.log("6" === 6); // false
const numberFromUser = Number(prompt("Enter number")); // "6"
console.log(numberFromUser === 6); // 6 === 6 // true
console.log("false" === false); // false
console.log(1 == true); // 1 == 1 // true
console.log(1 === true); //false
console.log("0" == false); // 0 == 0 // true
console.log('0' === false); //false
console.log("Papaya" < "papaya"); //true буква п большая < чем буква п маленькая
console.log("Papaya" === "papaya"); // false 
console.log(undefined == null); // 0 == 0 // true
console.log(undefined === null);
console.log(NaN === NaN); // false Nan никогда не равен Nan