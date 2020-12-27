// Классы
class Hero { 
    constructor(name, xp) {
        this.name = name;
        this.xp = xp;
    }
    changeName(name) {
        this.name = name;
    }
}
const mango = new Hero('Mango', 12);
console.log(mango);