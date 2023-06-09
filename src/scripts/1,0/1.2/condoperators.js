// > < >= <= == === != !==
let value;
value = 1 == '1'; // автоматически будет приводить к одному типу
value = 'a' > 'ab' // сравнивает по первому символу если совпадает то дальше

value = ';'.charCodeAt(); // показывает код символа. 



value = 10;
if(value === 10){
    console.log(10);
}
else{
    console.log(NaN);
}

if(value){ // если есть value (не undefine Не 0 не NaN null и не пустая строка.) все что преобразуется к true
    console.log('true')
}
else{
    console.log(null);
}



value = null;
console.log(!value); // означает НЕ. 


value = [];

if(value.length){ // проверит есть ли что то в массиве или объекте
    console.log(value);
}
else{
    console.log(value, 'пусто');
}

if(Array.isArray(value)){ //проверяем массив ли это? 
    console.log(value);
}
else{
    console.log('dfr');
}

value = {
    firstName: 'Evgen'
}

if(value.firstName){ // проверяем на наличие и значение объект
    console.log(value.firstName);
    }
// if(value.hasOwnProperty('firstName')){ // не работает
    // console.log(value.firstName);
// }

value = 0 || 0 || 2; // ИЛИ каждое значение пытается преобразовать к true(останавливается на правде)

console.log(value);

let age = 10;
if(age < 16 || age > 66){
    console.log('sone action');
}

let serverNickName = '';
let nickname = serverNickName || 'default nickname';

console.log(nickname);


value = 1 && 2 && 3; // И останавливается на false

let price = 7;

if(price > 4 && price < 30){
    console.log('беру');
}
console.log(value);

if(price > 4 && price < 30){
    console.log('беру');
}
 else if(price === 7){
    console.log('окей');
}
else(
    console.log('сколько угодно else if')
)