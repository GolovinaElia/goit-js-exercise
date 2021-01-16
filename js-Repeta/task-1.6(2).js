// Array.prototype.reduce()
//  - Поэлементно перебирает оригинальный массив
//  - Возвращает, что угодно
// - Заменяет все на свете
const numbers = [1, 2, 3, 4, 5]
const total = numbers.reduce(function (acc, number) {
    return acc + number;
}, 0);
console.log(total);

// Считаем общую зарплату

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150
};

const totalSalary = Object.values(salary).reduce(function (acc, num) {
    return acc + num;
}, 0);
console.log(totalSalary);

// Считаем общее количество часов
const players = [
    { id: 'player-1', name: "Mango", timePlayed: 100, points: 10, online: true },
    { id: 'player-2', name: "Mango1", timePlayed: 200, points: 20, online: true },
    { id: 'player-3', name: "Mango2", timePlayed: 300, points: 30, online: false },
];
const allTimePlay = players.reduce(function (time, player) {
    return time + player.timePlayed;
}, 0);
console.log(allTimePlay);
 
// Считаем общую сумму товаров
const carts = [
    { label: 'Apples', price: 100, quantity: 2},
    { label: 'Bananas', price: 120, quantity: 3 },
    {label: 'Lemons', price: 70, quantity: 4},
]
const totalAllcart = carts.reduce(function (price, cart) {
    return price + cart.price * cart.quantity;
}, 0);
console.log(totalAllcart);

// Собираем все теги из твитов

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'node.js']},
    {id: '001', likes: 2, tags: ['html', 'css']},
    {id: '002',likes: 17, tags: ['html', 'js', 'node.js']},
];
const allTags = tweets.reduce(function (acc, tweet) {
    acc.push(...tweet.tags)
    return acc;
}, []);
console.log(allTags);

// Ведем статистику тегов

const tagsStats = allTags.reduce(function (acc, tag) {
    // if (acc.hasOwnProperty(tag)) {
    //     acc[tag] += 1;
    //     return acc;
    // }
    // acc[tag] = 1;

    //  Грязная версия, мутирует аргумент, который приходит в acc
    //     acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] += 1 : acc[tag] = 1;


    //     return acc;
    // }, {});
    
    //    Чистая версия, каждый раз создает новый обьект 
    return {
        ...acc,
        [tag]: acc.hasOwnProperty(tag) ? acc[tag] += 1 : acc[tag] = 1,
    };
}, {});
    
console.log(tagsStats);
