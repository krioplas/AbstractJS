// prototype __PROTO__ - это свойства объекта. 
// __proto__ - есть у всех объектов. Для одинакового типа данных __proto__ равны. (age.__proto__ === age2.__proto__  - потому что созданы с помощью new Number одного и того же)
// все __proto__ функций и class раны между собой. 




// prototype - есть только у class и function
//Таким образом, мы можем добавлять новые методы и свойства не напрямую в текущий объект, а через его прототип.
// Что это даёт? Например, можно через общий прототип (класс) быстро вносить изменения в тысячи аккаунтов пользователей.

//Как работает механизм цепочки наследования? Он проверяет сверху вниз, если на верхнем уровне находит какое-то свойство или функцию, то сразу её вызывает. 
// Если он ничего не находит, тогда обращается к прототипу и ищет в нём.
//И если, ничего не найдено по всей цепочке прототипов, то выдается ошибка. С помощью прототипов, можно легко расширять свойства или методы объектов.




// Любой объект в JS создается с помощью класса или функции-конструктора. !!!new!!!(new class, new Date, new Function  ...) new Array new Number new Object. 

// Функция - конструктор это функция с большой буквы. 

// let man = {}   (man.__proto__)
// let man = []   (man.__proto__)
// let age = 18 (примитив)   (man.__proto__)  если обращаемся как к объекту, в памяти временно создается объектная версия примитива. 
// let age = '18' (примитив)   (man.__proto__)  если обращаемся как к объекту, в памяти временно создается объектная версия примитива. 
// let age = true (примитив)   (man.__proto__)  если обращаемся как к объекту, в памяти временно создается объектная версия примитива. 
// function far(){} (far.__proto__) - это объект функции
// const far = function(){} (far.__proto__) - константа ссылается на объект функции.
// const far = () => {} (far.__proto__) - константа ссылается на объект функции.
// class yuoR {} (yuoR.__proto__) - класс это "навороченная" функция. 
let car = {
    model: 'Mazda'
};
    console.log(car
        );

    const user = new Object ({
        nickname: 'sorax',
        age: 25,
        write: function(){
        console.log('Privet')
        }
    });
    console.log(user.__proto__);

    Object.prototype.sayHello = function(){
        console.log('Hello')
    }

    const Fun = function(a,b){
        a + b;
    }
        
    console.log(Fun.sayHello());





    console.log(user.sayHello());
   

    const fantomas = Object.create(user);
    fantomas.nickname = 'fantomas';

    console.log(fantomas.write(), fantomas.nickname, user.nickname);



    class Test {
        constructor(name){
            this.name = name
        }
        hello(){console.log('hello');}
    }

    let testValue = new Test('Evgen')

    console.log(testValue.__proto__.__proto__);
    console.log(testValue.__proto__.constructor.__proto__);
    console.log(testValue);