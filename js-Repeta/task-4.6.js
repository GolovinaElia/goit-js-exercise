// Array.prototype.filter()
//  - Поэлементно перебирает оригинальный массив
//  - Возвращает первый элемент, удовлетворяющий условию

const numbers = [5, 10, 15, 20, 25];

const numberSearch = numbers.find(function (number) {
    return number > 15
});
console.log(numberSearch);

const players = [
  { id: 'player-1', name: "Mango", timePlayed: 100, points: 10, online: true },
  { id: 'player-2', name: "Mango1", timePlayed: 200, points: 20, online: true },
  { id: 'player-3', name: "Mango2", timePlayed: 300, points: 30, online: false },
]

// Ищем игрока по id

const playeridToFind = 'player-3';

const player = players.find(function (player) {
    return player.id === playeridToFind
});
console.log(player);
