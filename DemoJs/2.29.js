// ЗАДАЧА: ПАРНІ ЧИСЛА
// Напиши функцію getEvenNumbers(start, end),
//  яка повертає масив усіх парних чисел від
//  start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

function getEvenNumbers(start, end) {
   // Change code below this line
  const numbers = []
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      numbers.push(i)
    }
  }
  return numbers
    // Change code above this line
  }