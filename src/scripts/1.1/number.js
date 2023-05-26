let num1 = 10;
let num2 = 20;
let value;

value = num1 + num2;
value += 100; // так же и - * / принято писать
value = 5 % 2 // остаток от деления


value++; // инкремент (увеличится на следующей строке)
++value; // инкремент (увеличится на данной строке)
value--; // декремент

value = 0.6 + 0.7;
value = value.toFixed(1); // округление до (1) знака
// value = parseFloat(value.toFixed(1)); // преобразовывает из строки в число 
value = (0.6*10 + 0.7*10) / 10;

//Math
value = Math //общий список методов
value = Math.random();
value = Math.round(2.45); // округление зависит от числа

value = Math.ceil(2.4); // округление до целого числа в большую сторону
value = Math.floor(2.4) // округление до целого числа в меньшую сторону

value = Math.min(1,2,8,9,0.5); // минимальное значение

value = Math.ceil(Math.random() * 100); // random число до 100

const arr = ['red', 'wert', 'gur', 'sdf', 'pas', 'white','black', 'car', 'fad', 'hir'];
value = value = Math.ceil(Math.random() * arr.length - 1); // random из массива

console.log(value,arr[value]);