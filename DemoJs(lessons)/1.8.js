// ## Example 8 - Логічні оператори

// Яким буде результат виразу

// && - name === 'user' && login === 'admin' // зупиняється тоді коли будь - яка дасть false
// || - name === 'user' || login === 'admin' // перший true який знайдемо , або останій flase в ланцюжку

console.log(true && 3); // 3

console.log(false && 3); //false

console.log(true && 4 && "kiwi"); // kiwi

0
''
false
null
undefined
NaN
-0

console.log(true && 0 && 'kiwi'); // 0
console.log(true || 3); // true
console.log(true || 3 || 4); // true
console.log(false || true || 7); // true
console.log(null || 2 || undefined); 2

console.log(1 && null && 2); // null
console.log((1 && null && 2) > 0); // null > 0 // false
console.log(null || (2 && 3) || 4); // 2 && 3 => null || 3 || 4 => 3

Number.parseInt()
console.log(Number("12.54000000"));