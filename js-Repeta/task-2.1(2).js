// Ввести число и прибавить все его составляющие (3: 1+2+3)
let userInput = prompt('Введите число');
userInput = Number(userInput);
let total = 0;

for (let i = 1; i <= userInput; i += 1) {
    total += i;
}
console.log(total);