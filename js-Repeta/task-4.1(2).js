// Цикл do...while
let userInput;

do {
    userInput = prompt('Введи число 5')
    if (userInput === null) {
        break;
    }
    userInput = Number(userInput);
} while (userInput !== 5)