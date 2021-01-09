// Получить что - то от пользователя и сравнить с тем что есть
const superValue = 'qwerty';
const userInput = prompt('Введи то что надо');
console.log('userInput before:', userInput);
const normalizedInput = userInput.toLowerCase();
console.log('userInput after:', userInput);
console.log('normalizedInput:', normalizedInput);
console.log(superValue === normalizedInput);