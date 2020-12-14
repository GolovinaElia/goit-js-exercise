// Работаем с коллекцией товаров в корзине:
// { name: 'яблоко', price: 50 }
// { name: 'виноград', price: 70}
//{ name: 'лимон', price: 60}
// {name: 'клубника', price: 110}

// Получить все элементы из корзины
const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    //Добавляет в корзину элементы
    add(product) {
        product.quantity = 1;
        console.log(product);
        this.items.push(product);
    },
    // Удаление из корзины
    remove(productName) {
        console.log(productName);
        for (let i = 0; i < this.items.length; i+=1 ) {
            const item = this.items[i];

            if (productName === item.name) {
                console.log('Нашли!');
                console.log(i);

                this.items.splice(i, 1);
            }
        }
    },
    // Очищает полностью корзину
    // clear() {
    //     this.items = [];
    // },
    // Подсчитывает полностью все цены
    countTotalPrice() {
        let total = 0;
        for (const item of this.items) {
            total += item.price * item.quantity;
}
        return total;
    },
    // Добавить через + и - в корзину товары
    increaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.quantity += 1;
            }
        }
    },
    // Убрать через + и - из корзины товаров
    decreaseQuantity(productName) {
       for (const item of this.items) {
           if (item.name === productName) {
               if (item.quantity - 1 === 0) {
                   this.remove(productName);
                   return;
                }
                item.quantity -= 1;
            }
        }  
    }
};
cart.add({ name: 'яблоко', price: 50 });
cart.add({ name: 'лимон', price: 60});
console.table(cart.getItems());
// cart.remove('яблоко');
// cart.clear();
// console.table(cart.getItems());
console.log('Total:', cart.countTotalPrice());
cart.increaseQuantity('яблоко');
console.table(cart.getItems());

cart.decreaseQuantity('лимон');
console.table(cart.getItems());