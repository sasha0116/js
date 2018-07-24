"use strict";

var min = prompt('Введите первое число ');
var max = prompt('Введите второе число ');{
    if (max<min){
        alert("Введите число больше первого")
    }
}

for (var i = min; i <= max; i++) {
    if (primeNum(i)) console.log(i);
}


function primeNum(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}
