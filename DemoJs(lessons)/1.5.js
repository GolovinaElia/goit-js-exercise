// ## Example 5 - Шаблонні рядки

// Склади фразу`A has B bots in stock`, де A, B - це змінні


const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
