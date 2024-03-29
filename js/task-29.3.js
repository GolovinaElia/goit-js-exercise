// Задание
// В конструкторе можно создавать новые тесты, для которых есть настройки по 
// умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, 
// они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию 
// и поверх них применить переопределённые настройки. 
// Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// Тесты
// Объявлена переменная defaultSettings
// Значение переменной defaultSettings это объект
// Объявлена переменная overrideSettings
// Значение переменной overrideSettings это объект
// Объявлена переменная finalSettings
// Значение переменной finalSettings это объект
// Значение свойства finalSettings.theme равно "light"
// Значение свойства finalSettings.public равно "false"
// Значение свойства finalSettings.withPassword равно "true"
// Значение свойства finalSettings.minNumberOfQuestions равно 10
// Значение свойства finalSettings.timePerQuestion равно 30
// При присваивании значения переменной finalSettings используется синтаксис ...


const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};