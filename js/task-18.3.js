// Задание
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. 
// Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). 
// Если продукт с таким названием не найден, функция должна возвращать null.

// Тесты
// Объявлена функция getProductPrice(productName).
// Вызов getProductPrice("Radar") возвращает 1300.
// Вызов getProductPrice("Grip") возвращает 1200.
// Вызов getProductPrice("Scanner") возвращает 2700.
// Вызов getProductPrice("Droid") возвращает 400.
// Вызов getProductPrice("Engine") возвращает null.

function getProductPrice(productName) {
  // Change code below this line
   for (const product of products) {
    if (product.name === productName) {
      return (product.price)
    }
  }
  return (products.price ? product.price : null)
  
  // Change code above this line
}
