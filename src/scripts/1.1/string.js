const firstName = 'Evgeny';
const lastName = 'Loginov';
const age = 30;
const str = 'First learn JS';

let value;

value = firstName + lastName; // конкатенация строк
value = firstName + ' ' + lastName; // конкатенация строк

value += ' I am ' + age; // конкатенация строк

value = firstName.length; // длинна строки
value = firstName[3]; // выбор символа
// JS создает временные обертки объекты для примитивных типов данных
value = firstName[firstName.length - 1]; //поиск последнего элемента

// Методы не меняют само значение строки!!!

value = lastName.toUpperCase(); // все заглавные (метод)

value = lastName.toLowerCase(); // все строчные (метод)
value = firstName.concat(' ' + lastName) // конкатенация строк через метод concat

value = lastName.indexOf('n'); // возвращает индекс необходимого символа (можно целиком слово)

value = str.indexOf('r', 5); // возвращает индекс необходимого символа с 5 символа (можно целиком слово)

value = str.includes('F'); // вернет boolean зависит от регистра (можно целиком слово)

value = str.slice(2,-3); // вырезает и показывает символы указанного значения (последний не входит) 

value = str.replace('JS', 'Java Script') // ищет и заменяет значение. Выводит полностью

console.log(value);

// const str = "This is another test";
// const reverseLongWords = (str) => {
// let text = str.split(" ");

//   for(var i = text.length-1; i >= 0; i--){ 
//     if(text[i].length >= 5){
//     text[i] = text[i].split("").reverse().join("");
//     }
//   }
//     text = String(text);
//     text = text.replace(/\,/gi, ' ');
//     return text;
// };
// console.log(reverseLongWords(str));