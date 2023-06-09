const user = {
    firstName: 'Evgeny',
    age: 30,
    email: 'test@gm.gt',
    'user-address': {
        city: 'novokuzneck'
    },
    skills: ['html', 'css', 'js'] 
}

let value = user.age; // обращаемся к значению из объекта
let prob = 'skills'

value = user['email'];
value = user['user-address']; // обращаемся к значению из объекта
value = user['user-address'].city;
value = user['user-address']['city']; // обращаемся к внутреннему значению
value = user[prob][0]; // получение значения из массива и использование  переменных 

user.firstName = 'nikita';
value = user.firstName;

value = user.info = 'info cool'; // добавление нового элемента в объект 
value = user['user-address'].city = 'Piter' // изменение объекта в объекте

user.plan = {};
user.plan.learn = 'learn'; // если не создать заранее объект то он будет undefined и не запишется 

console.log(value);
console.log(user);



const lettersCount = (str) => {  // ищет кол-во символов и переводит все в объект
    str = str.toLowerCase();    
    let dar = str.split('');
    let dir = {};
    dar.forEach(function(i) { dir[i] = (dir[i]||0) + 1;});
    return str;
};


console.log(lettersCount('aAAbbccde'));