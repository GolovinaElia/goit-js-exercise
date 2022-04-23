// МЕТОД МАСИВУ JOIN()
// Метод масивів join(delimeter) дозволяє
//  з'єднати елементи масиву в рядок.
//  У рядку елементи будуть розділені
//  символом або групою символів, зазначених
//  у delimeter. Тобто це зворотна операція методу рядків split(delimeter).

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'
// Доповни код функції makeStringFromArray(array, delimeter)
//  таким чином, щоб вона повертала у змінній string
//  результат з'єднання елементів масиву array з роздільником delimeter - рядок.

// Оголошена функція makeStringFromArray(array, delimeter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
 string = array.join(delimeter);
  // Change code above this line
  return string;
}