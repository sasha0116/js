/*Посчитать, сколько раз каждое слово используется в предложении. Простой вариант - слова состоят только из маленьких
букв, знаков препинания нет, между словами строго один пробел.*/

var text = prompt('Введите случайный текст');
var str = text.toLowerCase();
var punctuationless = str.replace(/[,+*?$^(.)]/g);
var arr = str.split(' ');

result = {};


for (i = 0; i < arr.length; ++i) {
    if (!result[arr[i]])
        result[arr[i]] = 0;
    ++result[arr[i]];
}


console.log(result);

