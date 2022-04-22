// МЕТОД РЯДКІВ SPLIT()
// Метод split(delimeter) дозволяє перетворити
//  рядок на масив, "розбивши" його по роздільнику
//  delimeter. Якщо роздільник - це порожній рядок,
//  отримаємо масив окремих символів. Роздільником може бути один або кілька символів.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]
// Доповни код функції splitMessage(message, delimeter) таким чином,
//  щоб вона повертала у змінній words результат поділу рядка message за роздільником delimeter - масив рядків.

// Оголошена функція splitMessage(message, delimeter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
words = message.split(delimeter);
  // Change code above this line
  return words;
}