// ІНДЕКСАЦІЯ ЕЛЕМЕНТІВ РЯДКА
// Рядок — це індексований набір з нуля або більше
//  символів, взятих в одинарні, подвійні або скісні лапки.

// Індексація елементів рядка починається з нуля.
//  Наприклад, в рядку 'JavaScript' літера 'J'
//  стоїть на позиції з індексом 0, а 't' - під індексом 9.
//  При цьому довжина рядка 'JavaScript' дорівнює 10,
//  тобто індекс останнього елемента завжди на одиницю менший його довжини.

// Для доступу до значення елемента рядка використовується
//  синтаксис квадратних дужок рядок[індекс].

// const productName = "Repair droid";
// console.log(productName[0]); // "R"
// console.log(productName[5]); // "r"
// console.log(productName[11]); // "d"
// console.log(productName[productName.length - 1]); // "d"
// Вміст рядка не можна змінити, лише прочитати.
//  Тобто не можна взяти якийсь символ і замінити
//  його, щойно рядок створений - він такий назавжди.
//  Можна лише створити повністю новий рядок
//  і присвоїти у змінну, замість старого.

// Доповни код, присвоївши оголошеним змінним
//  вирази звертання до відповідних елементів або властивостей рядка у змінній course.

// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.
// Оголошена змінна courseTopic
// Значення змінної courseTopic - це рядок "JavaScript essentials"
// Оголошена змінна courseTopicLength
// Значення змінної courseTopicLength - це число 21
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "J"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "s"

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length -1];

// Change code above this line
