// Цепочки методов - chaining
const numbers = [1, 5, 2, 4, 3];

const result = numbers
    .filter(x => x % 2 === 0)
    .map(y => y * 2)
    .reverse();
console.log(result);

// Сортируем тех кто онлайн по рангу
const players = [
    { id: 'player-1', name: "Mango", timePlayed: 200, points: 10, online: true },
    { id: 'player-2', name: "Mango1", timePlayed: 100, points: 20, online: true },
    { id: 'player-3', name: "Mango2", timePlayed: 300, points: 30, online: false },
];

const onlineSorted = players
    .filter(function(player) {
        return player.online;
    })
    .sort(function(prevPlayer, nextPlayer) {
        return prevPlayer.points - nextPlayer.points;
    });
console.table(onlineSorted);