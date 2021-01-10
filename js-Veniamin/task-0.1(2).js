// Вывести первую букву заглавную в строке
let s = 'jjjjjjjjjj';
// let result = '';

// for (let i = 0; i < s.length; i += 1) {
//     if (i === 0) {
//         result += s[i].toUpperCase();
//         continue;
//     }
//     result += s[i];
// }
let result = s[0].toUpperCase() + s.slice(1);
console.log(result);