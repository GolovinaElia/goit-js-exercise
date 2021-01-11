// Задание
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for
//  на for...of.

// Тесты
// Объявлена функция calculateTotalPrice(order).
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции calculateTotalPrice([]) возвращает 0.
// Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает
// правильную сумму.

function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (const ord of order) {
    total += ord;
  }

  // Пиши код выше этой строки
  return total;
}