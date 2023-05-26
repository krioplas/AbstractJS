let i = 0;
while(++i <= 10) { // сокращенная запись итератор в самом цикле!!! ++i 
    console.log(i);
}
i = 10;
while(i--){ // будет проводить цикл до 0 то есть До false
    console.log(i);
}

do { // сначала действие а потом проверка
    console.log('action');
} while(i > 0); 

for(let i =0; i < 10; i++){
    if( i === 5){
        continue; // пропускает итерацию
    }
    if(i === 6){
        break; // прерывает цикл
    }
    console.log(i);
}
console.clear();

let str = 'Goodbayet '
let rez = '';

for (let i = 0; i < str.length; i++){
    console.log(str[i] + '1');    
    rez += str[i] + '*';
}
console.log(rez);
console.clear();

let colors = ['white','black','yellow','orange'];
for(let i = 0; i < colors.length; i++){
    console.log(colors[i].toUpperCase());
}

const users = [
    {
        name:'Denis',
        age: 30
    },
    {
        name:'Evgen',
        age: 31
    },
    {
        name:'Lubasha',
        age: 31
    }
]

const userObj = {};

for(let i =0; i < users.length; i++){
    console.log(users[i].name);
    userObj[users[i].name] = users[i];
    console.log(userObj['Evgen']);
}

console.clear();

const user = {
    name: 'evgen',
    age: 30
};

for(let key in user){ // цикл для объектов создаем переменную ключа в объекте где нужно перебрать
    console.log(key); // ключи объекта
    console.log(user[key]); // значения объекта
}

for (let value of colors){ // цикл для переборки  массива. 
    console.log(value);
}









let str1 = '((())';

    
while(str1.includes('()')){
    str1 = str1.replace('()','');
}; 

console.log(str1);




function findAllIdx(arr, value) {
    let rez =[];
for (let i = 0; i < arr.length; ++i){
    console.log(arr[i]);
   if(arr[i] === value){
    rez.push(i);
   }
    
}
console.log(rez);
}

// for (let key of arr){ 
//     console.log(value); 
//     console.log(key);
//     console.log(arr.indexOf(0));
// }


console.log(findAllIdx([5, 3, 4, 3], 3));