"use strict";

var min = prompt('Введите первое число ');
if (isNaN(min)) {
    alert('eror! Enter the number!')
}
var max = prompt('Введите второе число ');
if (isNaN(max)) {
    alert("error! Enter the number!")
}

if (+max < +min) {
    alert("enter max>min")

}

for (var i = min; i <= max; i++) {
    if (primeNum(i))
        console.log(i);
}


function primeNum(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

