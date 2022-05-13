// Задание
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на 
// newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, 
// и splice() для того чтобы заменить этот элемент.

// Тесты
// Объявлена переменная bookShelf

// Значение переменной bookShelf это объект

// Значение свойства bookShelf.updateBook это метод объекта

// После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), 
// значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), 
// значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
	const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    // Change code above this line
  },
};