// ОПЕРАТОРИ ПОРІВНЯННЯ === І !==
// «Нестрогі» оператори == і != виконують перетворення типів значень,
//  що порівнюються, що може призвести до помилок, особливо у початківців.

// // ❌ Погано, виконується приведення типів
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false
// Тому для перевірки рівності або нерівності двох значень
//  використовуються оператори === (строга рівність)
//  і !== (строга нерівність), які не виконують приведення типів операндів.

// // ✅ Добре, приведення типів не виконується
// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true
// Функція isValidPassword (password) перевіряє рівність
//  збереженого і введеного паролів і повертає результат
//  перевірки - буль true або false. Змінна SAVED_PASSWORD
//  зберігає значення попередньо збереженого пароля.
//  Введений пароль передається у параметр password.

// Присвой змінній isMatch вираз перевірки рівності введених
//  і попередньо збережених паролів. Результатом виразу перевірки
//  повинно бути true, якщо значення збігаються, і false - якщо ні.

// Оголошена функція isValidPassword(password)
// У виразі перевірки паролів використаний оператор ===
// Виклик isValidPassword("mangodab3st") повертає false
// Виклик isValidPassword("kiwirul3z") повертає false
// Виклик isValidPassword("jqueryismyjam") повертає true

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = SAVED_PASSWORD === password;

  // Change code above this line
  return isMatch;
}