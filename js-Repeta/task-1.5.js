// Функции - конструкторы
const Manager = function (name, sales) {
    this.name = name;
    this.sales = sales;
}

const mango = new Manager('Mango', 1200);
console.log(mango);

const poly = new Manager('Poly', 12);
console.log(poly);

