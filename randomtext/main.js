var str = prompt('Введите случайный текст');
str = str.replace(/[,+*?$^(.)]/g);
var arr = str.split(' ');

result = {};


for (i = 0; i < arr.length; ++i) {
    if (!result[arr[i]])
        result[arr[i]] = 0;
    ++result[arr[i]];
}


console.log(result);

