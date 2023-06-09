function createCalcFunction(n){
    return function(){
        console.log(100 * n); // значение n замыкается внутри функции create
    }
}

const calc = createCalcFunction(5);

calc(); // при вызове функции у нее уже есть значение n 



function createIncrementor(n){
    return function(m){
        return m - n;
    }
}
const addRes = createIncrementor(1);
const addTen = createIncrementor(10);
console.log(addRes(6));
console.log(addTen(6));


function urlGenerator(domain){
    return function(url){
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator(`com`);
console.log(comUrl('google'))
console.log(comUrl('rth'))



console.clear();








const person1 = {
    name: 'Михаил',
    age: 22,
    job: 'Frontend'
}
const person2 = {
    name: 'Елена',
    age: 210,
    job: 'SMM'
}

function bind(context, fn){
    return function(...args){
        fn.apply(context,args)
    }
}
function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

bind(person1, logPerson)();
bind(person2, logPerson)();


console.clear();


// Замыкания 2 урок
// Функция  = код функции + доступные данные

let a = 0; // глобальная переменная, могут изменить из вне.

function  count(){
    a++;
    console.log(a)
}

function cs(){
    let a = 0; // Локальная переменная замкнута и не пересоздается. Доступна только внутренним функциям. 
    return function(){
        a++;
        console.log(a);
    }
}
let d = cs();
d();
console.log(a);
d();
d();
count();
count();
count();
a = 'asd';
console.log(a, 'измененная переменная');