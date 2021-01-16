// Array.prototype.sort()
//  - Сортирует и изменяет оригинальный массив
const numbers = [1, 9, 6, 2, 3];
numbers.sort( );
console.log(numbers);

numbers.sort(function (prev, next) {
    return next - prev;
});
console.log(numbers);

console.log('a'.charCodeAt(0));
console.log('A'.charCodeAt(0));

const letters = ['b', 'B', 'a', 'A'];
letters.sort( );
console.log(letters);

// Как сделать копию массива, чтобы не сортровать оригинальный
const copy = [...numbers].sort();

console.log(numbers);
console.log(copy);

// Кастомная сложных типов
const players = [
    { id: 'player-1', name: "Mango", timePlayed: 200, points: 10, online: true },
    { id: 'player-2', name: "Mango1", timePlayed: 100, points: 20, online: true },
    { id: 'player-3', name: "Mango2", timePlayed: 300, points: 30, online: false },
];

const sortedByTopPlayers = [...players].sort(function (prevPlayer, nextPlayer) {
    // по возрастанию значения свойства
    // return prevPlayer.timePlayed - nextPlayer.timePlayed
    // по убыванию значения свойства
    return nextPlayer.timePlayed - prevPlayer.timePlayed
});
console.table(players);
console.table(sortedByTopPlayers);
