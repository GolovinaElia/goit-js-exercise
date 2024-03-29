// ПАРАМЕТРИ ТА АРГУМЕНТИ
// В круглих дужках після імені функції йдуть параметри - перелік даних, які функція очікує під час виклику.

// Параметры - це локальні змінні, доступні тільки у тілі функції.
//  Вони розділяються комами. Параметрів може бути декілька або їх взагалі може не бути,
//  тоді записуються просто порожні круглі дужки.

// Під час виклику функції, в круглих дужках можна передати аргументи
//  - значення для оголошених параметрів функції.

// // 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // 2. Передача аргументів
// multiply(2, 3, 5); // Результат множення дорівнює 30
// multiply(4, 8, 12); // Результат множення дорівнює 384
// multiply(17, 6, 25); // Результат множення дорівнює 2550
// Порядок передачі аргументів повинен відповідати порядку оголошених параметрів:
//  значення першого аргументу буде присвоєно першому параметру, другого аргументу - другому параметру тощо.

// Функція add повинна вміти додавати три числа і виводити результат у консоль
// . Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.

// Доповни console.log() таким чином, щоб він логував рядок
//  "Addition result equals <result>", де <result> - це сума переданих чисел.

// Оголошена функція add(a, b, c)
// Виклик add(15, 27, 10) виводить у консоль "Addition result equals 52"
// Виклик add(10, 20, 30) виводить у консоль "Addition result equals 60"
// Виклик add(5, 10, 15) виводить у консоль "Addition result equals 30"

// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);