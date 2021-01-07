// Задание
// Дополни код функции splitMessage(message, delimeter) так,
//     чтобы она возвращала в переменной words результат разделения
// строки message по разделителю delimeter - массив строк.

// Тесты
// Объявлена функция splitMessage(message, delimeter).
// Вызов splitMessage('Манго спешит на поезд', ' ') возвращает ['Манго', 'спешит', 'на', 'поезд'].
// Вызов splitMessage('Манго', '') возвращает ['М', 'а', 'н', 'г', 'о'].
// Вызов splitMessage('лучшее_за_неделю', '_') возвращает ['лучшее', 'за', 'неделю'].

function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки
  words = (message.split(delimeter));
  
  
  // Пиши код выше этой строки
  return words;
}