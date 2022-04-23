// ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА
// Напиши функцію findLongestWordstring),
//  яка приймає довільний рядок, що складається
//  тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

function findLongestWord(string) {
  // Change code below this line
const results = string.split(' ');
    let longestWord = results[0];

    for (const result of results) {
        if (result.length > longestWord.length) {
            longestWord = result;
        }
    }
return longestWord;

  // Change code above this line
}