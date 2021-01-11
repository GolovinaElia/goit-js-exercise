// Логика break и continue.
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const nameToFind = 'Poly';
let message = 'такого друга нет';

// for (let i = 0; i < friends.length; i += 1) {
//     const friend = friend[i];
    
//     if (nameToFind === friend[i]) {
        // console.log('нашли такого друга');
//     }

// }
    for (const friend of friends) {
        if (nameToFind === friend[i]) {
            message = 'нашли такого друга';
            break;
        }
    }
console.log(message);