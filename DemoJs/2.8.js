// ІНДЕКС ОСТАННЬОГО ЕЛЕМЕНТА
// Найчастіше ми заздалегідь у коді не знаємо,
//  яка буде довжина масиву. Для того
//  щоб отримати значення останнього елемента,
//  застосовується наступний підхід - довжина
//  масиву завжди на одиницю більша за індекс
//  останнього елемента. Використовуючи формулу
//  довжина_масиву - 1, можна отримати значення
//  останнього елемента масиву довільної довжини.

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// planets[lastElementIndex]; // "Venus"
// Оголоси дві зміні:

// Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement	Значення останнього елемента масиву
// Оголошена змінна lastElementIndex
// Значення змінної lastElementIndex - це число 3
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "banana"

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];