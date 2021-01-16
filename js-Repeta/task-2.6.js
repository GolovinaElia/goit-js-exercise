// Array.prototype.map()
//  - Поэлементно перебирает оригинальный массив
//  - Возвращает новый массив такой же длины
const numbers = [1, 2, 3, 4, 5]
numbers.map(function (element, index, array) {
  console.log(element)
  console.log(index)
  console.log(array)
})

const players = [
    { id: 'player-1', name: "Mango", timePlayed: 100, points: 10, online: true },
  { id: 'player-2', name: "Mango1", timePlayed: 200, points: 20, online: true },
  { id: 'player-3', name: "Mango2", timePlayed: 300, points: 30, online: false },
]
// Получаем все имена в массиве
const getPlayersNames = (players) => {
  return players.map((player) => player.name)
}
console.log(getPlayersNames(players))

const playerNames = players.map(function (player) {
  return player.name
})
console.log(playerNames)

const getPlayersNames1 = function (players) {
  // const playerNames1 = players.map(function (player) {
  //     return player.name;
  // })
  return players.map((player) => player.name)
}
console.log(getPlayersNames1(players))

// Увеличиваем поинты каждого игрока
const updatesPlayers = players.map(function (player) {
    console.log(player);
  return {
    ...player,
    points: player.points + player.points * 0.1,
  }
})
console.table(updatesPlayers);

// Увеличиваем количество часов игрока
const playerId = 'player-3';
const timePlayer = players.map(function (player) {
    if (player.id === playerId) {
        return {
            ...player,
            timePlayed: player.timePlayed + 50,
        };
    }
    return player;
});
console.log(timePlayer);
