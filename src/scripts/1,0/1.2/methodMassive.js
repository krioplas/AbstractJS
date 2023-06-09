const numArr = [2, 32, 1234, 54, 323];
let value;
value = numArr.length; // длинна массива(кол-во элементов)
//numArr.length = 0;  // получим пустой массив 
value = Array.isArray(numArr); // является этот элемент массивом. true false
value = numArr[3]; // элемент по индексу

numArr[2] = 2; // перезапись элемента массива

value = numArr.indexOf(32); // ищет индекс элемента


value = numArr.push(100); // добавляет в конец массива. Вернет кол-во элементов
value = numArr.pop(); // удаляет элемент в конце
value = numArr.unshift(111); // добавляет в начало массива
value = numArr.shift(); // удаляет с начала элемента

value = numArr.slice(0, 2); // вырезает часть массива не изменяет исходный массив
value = numArr.splice(1, 1) // удаляет элемент по индексу, кол-во элемента. // изменяет массив 
value = numArr.splice(1, 0, 45)// добавляет элемент после индекса. Изменить ноль - удалит элемент по индексу

value = numArr.reverse(); // переворачивает массив заменяет исходный массив
value = numArr.concat(numArr); //(1, 2, 3, 4) конкантенация массивов или добавление значения.
value = numArr.join('') // делает из массива строку. Разные разделители.

value = 'hello world'.split(' ') // делает из строки массив по разделителю
console.log(value, numArr)