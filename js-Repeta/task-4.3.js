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
    }
};
cart.add({ name: 'яблоко', price: 50 });
cart.add({ name: 'лимон', price: 60});
console.table(cart.getItems());
cart.remove('яблоко');
console.table(cart.getItems());