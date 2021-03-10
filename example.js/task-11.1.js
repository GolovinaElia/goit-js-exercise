// Текущее время
// function getTime() {
//   var now = new Date();
//   var result = now.getHours() + ":" + now.getMinutes();

//   return(result);
// }
// console.log("Сейчас " + getTime());

// Создание читаемой даты
// let tm = new Date();
// let resTxt = '';
// resTxt += "Сейчас " + tm.getHours() + ":"
//        + tm.getMinutes() + ":" + tm.getSeconds() + ", ";

// resTxt += "дата: " + tm.getDate() + "." + (tm.getMonth() + 1)
//        + "." + tm.getFullYear();

// console.log(resTxt);

// function showTime() {
//   var monthsArr = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
//   "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

//   var daysArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

//   var dateObj = new Date();

//   var year = dateObj.getFullYear();
//   var month = dateObj.getMonth();
//   var numDay = dateObj.getDate();
//   var day = dateObj.getDay();
//   var hour = dateObj.getHours();
//   var minute = dateObj.getMinutes();
//   var second = dateObj.getSeconds();

//   if (minute < 10) minute = "0" + minute;

//   if (second < 10) second = "0" + second;

//   var out = daysArr[day] + ", " + numDay + " " + monthsArr[month]
//           + " " + year + ", " + hour + ":" + minute + ":" + second;

//   return out;
// }

// alert(showTime());

//Обратный отсчет
// var countdown = 5;
// var timer = setInterval(
//   function() {
//     countdown--;
//     if (!countdown) {
//       clearInterval(timer);
//     }

//     console.log("Обратный отсчет: " + countdown);
//   },
// 2000); // Частота: 2000 [ms] = 2 [s]

//Сравнить две даты
// const date1 = new Date('July 10, 2018 07:22:13')
// const date2 = new Date('July 22, 2018 07:22:13')
// const diff = (date2.getTime() - date1.getTime())/1000 /60 /60 /24 // difference in milliseconds
// console.log(diff);

//равны ли две даты
// const date1 = new Date('July 10, 2018 07:22:13')
// const date2 = new Date('July 10, 2018 07:22:13')
// if (date2.getTime() === date1.getTime()) {
//  console.log("Ok");
// }

// const date = new Date();
// console.log(date);

// let i;
// for (i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i), 0);
// }

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 1;
// a[c] = 2;
// console.log(a[b]);

// let x;

// true || (x = 1);

// console.log(x);

class Student {
  constructor (){}
}
console.log(typeof Student);