// 3.Написать функцию, которая принимает число от 0 до 10000 и сообщает, сколько в нем тысяч, сотен, десятков и единиц.
"use strict";

var number = prompt('enter number')

if (isNaN(number))
    alert('Error! enter number')
else if (number > 10000) {
    alert('Enter number min 10000')
}


console.log("Thousands: " + Math.floor(number / 1000));
number = number % 1000;
console.log("Hundreds: " + Math.floor(number / 100));
number = number % 100;
console.log("Tens: " + Math.floor(number / 10));
number = number % 10;
console.log("Units: " + Math.floor(number));
