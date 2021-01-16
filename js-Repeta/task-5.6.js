// Array.prototype.every()
//  - Поэлементно перебирает оригинальный массив
//  - Возвращает true или false, если все элементы массива довлетворяют условию

const players = [
  { id: 'player-1', name: "Mango", timePlayed: 100, points: 10, online: true },
  { id: 'player-2', name: "Mango1", timePlayed: 200, points: 20, online: true },
  { id: 'player-3', name: "Mango2", timePlayed: 300, points: 30, online: false },
]
const isAllaOnline = players.every(function (player) {
    return player.online
});
console.log(isAllaOnline);

// Сыграл больше 100 часов
const averagedInPlayTime = players.every(function (player) {
    return player.timePlayed > 10
});
console.log(averagedInPlayTime);

// / Array.prototype.some()
//  - Поэлементно перебирает оригинальный массив
//  - Возвращает true или false, если хотя бы один элемент массива довлетворяет условию

const isAnyaOnline = players.some(function (player) {
    return player.online
});
console.log(isAnyaOnline);

