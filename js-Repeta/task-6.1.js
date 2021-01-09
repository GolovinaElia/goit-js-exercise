//  Общая стоимость заказов. Количество средств на счету.
let balance = 1000;
const payment = 2000;

if (balance >= payment) {
    balance -= payment;
    console.log('Все хорошо! Снимаем деньги, спасибо за покупку!');
    console.log(`На счету осталось ${balance} кредитов`);
} else {
   console.log('На счету недостаточно средств для проведения операции!'); 
}