// Array.prototype.filter()
//  - Поэлементно перебирает оригинальный массив
//  - Возвращает новый массив
//  - Добавляет в возвращаемый массив элементы, которые удовлетворяют условию

const numbers = [5, 10, 15, 20, 25];

const numberSearch = numbers.filter(function (number) {
    return number > 15
});
console.log(numberSearch);

// Получаем массив всех онлайн игроков

const players = [
  { id: 'player-1', name: "Mango", timePlayed: 100, points: 10, online: true },
  { id: 'player-2', name: "Mango1", timePlayed: 200, points: 20, online: true },
  { id: 'player-3', name: "Mango2", timePlayed: 300, points: 30, online: false },
]

const playersOnline = players.filter(function (player) {
    return player.online
});
console.table(playersOnline);

// Получаем массив всех оффлайн игроков
const playersOffline = players.filter(function (player) {
    return !player.online
});
console.table(playersOffline);

// Получаем список игроков с временем больше 100 часов
const hardcorePlayers = players.filter(function (player) {
    return player.timePlayed > 100
});
console.table(hardcorePlayers);