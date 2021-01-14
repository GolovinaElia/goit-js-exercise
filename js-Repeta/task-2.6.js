// Array.prototype.map()
//  - Поэлементно перебирает оригинальный массив
//  - Возвращает новый массив такой же длины
const players = [
    { name: 'Mango', },
    { name: 'Mango1', },
    { name: 'Mango2', },
];

const getPlayersNames = players => {
    return players.map(player => player.name)
    };
console.log(getPlayersNames(players));

    const playerNames = players.map(function (player) {
        return player.name;  
    });
console.log(playerNames);

const getPlayersNames1 = function (players) {
    // const playerNames1 = players.map(function (player) {
    //     return player.name;
    // })
    return players.map(player => player.name);
}
console.log(getPlayersNames1(players));
