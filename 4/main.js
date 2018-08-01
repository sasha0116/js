/*Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой
функцией, возвращая новый массив.Обрати внимание: функция не должна изменять переданный ей массив:*/

'use strict';
var arr = [1, 2, 3, 4, 5];

function number(fn, arr) {

    var narr = [];

    for (var i = 0; i < arr.length; i++) {

        narr.push(square(arr[i]))

    }

    return narr

}


function square(x) {
    return x * x;
} // возведение в квадрат

console.log(number(square, arr));
console.log(arr)

