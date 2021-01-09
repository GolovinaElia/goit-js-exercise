// Узнать скидку.
const totalExpenses = 200;
let discount = 0;

if (totalExpenses >= 100 && totalExpenses < 1000) {
    discount = 2;
    console.log('Бронзовый партнер, скидка 2%');
} else if (totalExpenses >= 1000 && totalExpenses < 5000) {
discount = 5;
    console.log('Серебрянный партнер, скидка 5%');
} else if (totalExpenses >= 5000) {
discount = 10;
    console.log('Золотой партнер, скидка 10%');
} else {
    console.log('У Вас еще нет партнерской скидки');
}
 console.log(`Оформляем заказ со скидкой ${discount}%`);   
