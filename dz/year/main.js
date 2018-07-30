// 2. Написать функцию, которая принимает год и сообщает високосный он или нет. Валидация данных необходима.

"use strict";

var year = +prompt("Введи год:");
if (isNaN(year)) {
    alert("Нужно ввести целое число.")
}
if (isLeapYear(year)) {
    alert("Год " + year + " - высокосный.");
} else {
    alert("Год " + year + " - не высокосный.");
}

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

}