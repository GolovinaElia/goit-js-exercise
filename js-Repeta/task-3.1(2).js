// Ввести число и прибавить все его составляющие (3: 1+2+3). Используем while.
const number = 3;
let total = 0;
let i = 1;

while (i <= number) {
    total += i;
    i += 1;
}
console.log(total);