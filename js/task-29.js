// Задание
// Функция getShippingCost(country) должна проверять возможность доставки
// товара в страну пользователя(параметр country) и возвращать сообщение
// о результате хранящееся в переменной message.Обязательно используй инструкцию
// switch.

// Формат возвращаемой строки Доставка в < страна > будет стоить < цена > кредитов,
//     где вместо < страна > и < цена > необходимо подставить соотвествующие
// значения.

// Список стран и стоимость доставки:

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Ямайка - 120 кредитов
// Из списка видно, что доставка есть не везде.Если указанной страны нет в списке,
//     то функция должна вернуть строку 'Извините, в вашу страну доставки нет'

// Тесты
// Объявлена функция getShippingCost(country).
// В теле функции использована инструкция switch.
// Вызов getShippingCost('Австралия') возвращает 'Доставка в Австралия будет стоить 170 кредитов'.
// Вызов getShippingCost('Германия') возвращает 'Извините, в вашу страну доставки нет'.
// Вызов getShippingCost('Китай') возвращает 'Доставка в Китай будет стоить 100 кредитов'.
// Вызов getShippingCost('Чили') возвращает 'Доставка в Чили будет стоить 250 кредитов'.
// Вызов getShippingCost('Ямайка') возвращает 'Доставка в Ямайка будет стоить 120 кредитов'.
// Вызов getShippingCost('Швеция') возвращает 'Извините, в вашу страну доставки нет'.

function getShippingCost(country) {
  let message;
  // Пиши код ниже этой строки
switch (country) {
  case 'Китай':
    message = `Доставка в ${'Китай'} будет стоить ${'100'} кредитов`;
break;

    case 'Чили':
    message = `Доставка в ${'Чили'} будет стоить ${'250'} кредитов`;
break;
    
    case 'Австралия':
    message = `Доставка в ${'Австралия'} будет стоить ${'170'} кредитов`;
break;

    case 'Ямайка':
    message = `Доставка в ${'Ямайка'} будет стоить ${'120'} кредитов`;
break;
    
  default:
     message = 'Извините, в вашу страну доставки нет';
}
  // Пиши код выше этой строки
  return message;
}