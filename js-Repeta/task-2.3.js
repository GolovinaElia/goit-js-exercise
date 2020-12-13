// Перебрать элементы обьекта и посчитать количество значений.
const feedback = {
    good: 5,
    neutral: 10,
    bad: 3
};
// const keys = Object.keys(feedback);
// let totalFeedback = 0;

// for (const key of keys) {
//  console.log(key);
//     console.log(feedback[key]);

    // totalFeedback += feedback[key];
// }
// console.log('Total:', totalFeedback);

const values = Object.values(feedback);
console.log(values);
let totalFeedback = 0;

for (const value of values) {
    console.log(value);

    totalFeedback += value;
}
console.log('Total:', totalFeedback);