// Методы filter и find
// Метод filter(callback) используется для единственной операции - 
// фильтрации массива, то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию.

// массив.filter((element, index, array) => {
//   // Тело коллбек-функции
// });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает новый массив.
// Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
// Если коллбек вернул true элемент добавляется в возвращаемый массив.
// Если коллбек вернул false элемент не добавляется в возвращаемый массив.
// Если ни один элемент не удовлетворил условию, возвращает пустой массив.
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// То есть метод filter вызывает коллбек-функцию для каждого элемента
//  исходного массива и если результат её выполнения true, текущий элемент добавляет в новый массив.

// Задание
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers,
//  а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// Тесты
// Объявлена переменная numbers.
// Значение переменной numbers это массив [17, 24, 82, 61, 36, 18, 47, 52, 73].
// Объявлена переменная evenNumbers.
// Значение переменной evenNumbers это массив [24, 82, 36, 18, 52].
// Объявлена переменная oddNumbers.
// Значение переменной oddNumbers это массив [17, 61, 47, 73].
// Для перебора массива numbers использован метод filter().

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2);