// Array.prototype.forEach()
// - Поэлементно перебирает оригинальный массив
// - Ничего не возвращает
// - Заменяет классический for, если не нужно прерывать цикл.

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (element, index, array) {
    console.log(element);
    console.log(index);
    console.log(array);
});