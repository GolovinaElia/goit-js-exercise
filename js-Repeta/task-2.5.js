// Свойство Function.prototype
const Manager = function (name, sales) {
    this.name = name;
    this.sales = sales;
}
// console.dir(Manager);

Manager.prototype.sell = function () {
    this.sales += 1;
}
// const changeName = function (name) {
//     this.name = name;
// }

Manager.prototype.changeName = function (name) {
    this.name = name;
}

const mango = new Manager('Mango', 1200);
console.log(mango);
mango.sell();
console.log(mango);

// const poly = new Manager('Poly', 12);
// console.log(poly);

// console.log(poly.hasOwnProperty('y'));

// const newName = changeName;
// console.log('Polllly');

// poly.changeName('Polllly');
// console.log(poly);

// []-----> {} Array.prototype
// new Array()
// [] - массив
// {} - обьект