// ШАБЛОННІ РЯДКИ
// Шаблонні рядки — це альтернатива конкатенації зі зручнішим синтаксисом.
//  Шаблонний рядок береться у зворотні (скісні) лапки,
//  замість подвійних або одинарних, і може містити місцезаповнювачі,
//  які позначаються знаком долара і фігурними дужками - ${вираз}.

// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Ласкаво просимо ${guestName}, ви заселені у номер ${roomNumber}`;
// Оголоси змінну message і запиши в неї повідомлення про покупку,
//  рядок у форматі: "You picked <назва товару>,
//  price per item is <ціна товару> credits".
//  Де <ім'я каталогу> і <ціна товару> — це значення змінних productName
//  і pricePerItem. Використовуй синтаксис шаблонних рядків.

// Оголошена змінна productName
// Значення змінної productName - це рядок "Droid"
// Оголошена змінна pricePerItem
// Значення змінної price - це число 3500
// Оголошена змінна message
// Значення змінної message - це рядок "You picked Droid, price per item is 3500 credits"

const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
console.log(message)