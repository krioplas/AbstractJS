// function declaration

function sayHello(firstName = 'default', lastName  = 'default') {
    return `Hello: ${firstName} ${lastName}`;
}
let res = sayHello('Evgeny', 'Loginov') + ' !';
let res2 = sayHello(); // даже если вызвать до объявления функции то она сработает
console.log(res);
console.log(res2); // есть возможность работать и с заранее заданными параметрами

console.clear();



let x = 10;

function foo() {
    x = 20; // функция изменяет переменную и в глобальном пространстве.
    let x = 15; // при объявлении внутри блока она остается локальной.
    console.log(x)
}
foo();

console.log(x);


const user = {
    name: 'Evgen',
    age: 30
};

function getObj(obj) {
    console.log(obj);
    obj.name = 'EVN';
}
getObj(user); // вызов функции с глобальным объектом
console.log(user); // уже измененный глобальный объект
console.clear();

// function expression

const square = function(x) { // не может быть вызвана до фактического присвоения в переменную.
    return x * x;
}
square(5);


// Самовызывающаяся функция (инкапсулировать и закрыть доступ к переменным и именам)
(function (sqr) { 
console.log(sqr)
})('FEar');


//Чистая функция
//1. Функция зависит только от своих входных аргументов. Одни и тех же значения для одних и тех же аргументов.
//2. У функции нет побочных эффектов. Она не изменяет значения и переменные в глобалке.  