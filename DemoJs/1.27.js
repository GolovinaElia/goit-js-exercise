// ІНСТРУКЦІЯ SWITCH
// У деяких випадках незручність читання складних розгалужень
//  if...else можна уникнути, використовуючи «плоскіший» синтаксис інструкції розгалуження switch.

// Сфера застосування switch обмежена задачами з одним
//  загальним питанням (що порівнювати) і безліччю варіантів відповідей (з чим порівнювати).

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;
// }
// Його синтаксис складається з блоку switch(значення)
//  - що потрібно порівняти та безлічі окремих випадків
//  case значення: - з чим потрібно порівняти.
//  Для порівняння використовується оператор
//  строгої рівності ===. Тобто не можна
//  порівняти на більше або менше, тільки на рівність.

// Значення в блоці switch(значення) - рядок
//  або число, яке порівнюється на строгу
//  рівність з усіма значеннями в блоках
//  case значення: по черзі, зверху вниз.

// Оператор break в кінці кожного блоку
//  case необхідний, щоб перервати
//  подальші перевірки та одразу 
// перейти до коду після switch
//  у тому разі, коли перевірка на рівність повернула true.

// Функція getSubscriptionPrice(type)
//  отримує рядок з типом передплати
//  користувача (параметр type),
//  перевіряє її на збіг з трьома
//  можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.

// Якщо значення параметра type - це рядок:

// "starter" - ціна передплати 0 кредитів.
// "professional" - ціна передплати 20 кредитів.
// "organization" - ціна передплати 50 кредитів.
// Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// Після рефакторингу інструкція if..else
//  була замінена на switch. Доповни код інструкції switch, щоб функція працювала правильно.

// Оголошена функція getSubscriptionPrice(type)
// Виклик getSubscriptionPrice("professional") повертає число 20
// Виклик getSubscriptionPrice("organization") повертає число 50
// Виклик getSubscriptionPrice("starter") повертає число 0

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter": // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}