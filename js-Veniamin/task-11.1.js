/**
 * Пример 10 - Опертор %
 * Написать программу которая получит от пользователя число (количество минут) 
 * и выведёт на экран строку в формате часов и минут.
 * 70 покажет 01:10
 * 450 покажет 07:30
 * 
 */

// const minuts = Number(prompt('Введите количество минут'));
const minutesPerHour = 60;
const allMinutes = +prompt('Введите количество минут');

const hours = Math.floor(allMinutes / minutesPerHour);
const minutes = allMinutes % minutesPerHour;

alert(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);