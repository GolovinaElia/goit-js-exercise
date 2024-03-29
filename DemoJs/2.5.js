// ДОСТУП ДО ЕЛЕМЕНТІВ ЗА ІНДЕКСОМ
// Для доступу до значення елемента масиву
//  застосовують синтаксис квадратних дужок
//  масив[індекс]. Між ім'ям змінної масиву
//  і квадратними дужками не повинно бути пробілу.

// Увага
// Індексація елементів масиву починається з нуля.

// const planets = ["Earth", "Mars", "Venus"];
// planets[0]; // "Earth"
// planets[2]; // "Venus"
// Оголоси три змінні і присвой кожній з них значення,
//  використовуючи нотацію квадратних дужок.

// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "apple"
// Оголошена змінна secondElement
// Значення змінної secondElement - це рядок "plum"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "orange"

const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];