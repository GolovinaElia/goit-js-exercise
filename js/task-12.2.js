// Задание
// Дополни код функции makeStringFromArray(array, delimeter) так,
//     чтобы она возвращала в переменной string результат соединения
// элементов массива array c разделителем delimeter - строку.

// Тесты
// Объявлена функция makeStringFromArray(array, delimeter).
// Вызов makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ') возвращает 'Манго спешит на поезд'.
// Вызов makeStringFromArray(['М', 'а', 'н', 'г', 'о'], '') возвращает 'Манго'.
// Вызов makeStringFromArray(['лучшее', 'за', 'неделю'], '_') возвращает 'лучшее_за_неделю'.

function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки
 string = array.join(delimeter);
  // Пиши код выше этой строки
  return string;
}