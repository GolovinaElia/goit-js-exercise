// Задание
// Функция checkPassword(password) получает пароль в параметр password,
//     проверяет его на совпадение с паролем администратора в переменной
// ADMIN_PASSWORD и возвращает сообщение о результате сравнения,
//     хранящееся в переменной message.

// Если значение параметра password:

// равно null, значит пользователь отменил операцию и в message
// записывается строка 'Отменено пользователем!'.
// совпадает со значением ADMIN_PASSWORD, в переменную message
// присваивается строка 'Добро пожаловать!'.
// не удобвлетворяет ни одному из предыдущих условий, в переменную
// message записывается строка 'Доступ запрещен, неверный пароль!'.
// Проведи рефакторинг кода, заменив инструкцию if..else на switch,
// и не забудь о блоке default (аналог else).

// Тесты
// Объявлена функция checkPassword(password).
// Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword(null) возвращает 'Отменено пользователем!'.
// Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
switch (password) {
  case null:
   message ='Отменено пользователем!';
    break;
  case ADMIN_PASSWORD:
    message ='Добро пожаловать!';
    break;
    
  default:
    message = 'Доступ запрещён, неверный пароль!';
    } 
 return message;
}