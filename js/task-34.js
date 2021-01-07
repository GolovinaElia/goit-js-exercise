// Задание
// Функция normalizeInput(input) принимает строку(параметр input)
// и возвращает такую же строку, но в нижнем регистре.Присвой
// переменной normalizedInput выражение создания строки в нижнем
// регистре из параметра input.

// Тесты
// Объявлена функция normalizeInput(input).
// Вызов функции normalizeInput('Привет мир') возвращает 'привет мир'.
// Вызов функции normalizeInput('Это НЕ СпаМ') возвращает 'это не спам'.
// Вызов функции normalizeInput('Большие СКИДКИ') возвращает 'большие скидки'.

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
}