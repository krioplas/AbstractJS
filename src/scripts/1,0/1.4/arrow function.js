
// стрелочная функция если есть аргументы
const plus = (a, b) => a + b // можем опустить блок и return если не большое выражение. 
console.log(plus(5,5));
// const plus = (a = 0, b = 0) => a + b   можно использовать параметры по умолчанию.  
// стрелочная функция если нет аргументов
const plus1 = () => console.log('hello world');
plus1();
// если только один аргумент

const ter = x => x*2;
ter();
// const ter = (x = 2) => x*2;  если есть параметр по умолчанию скобки всегда нужны.

const moreAction = (a, b) =>{   // если несколько условий или выражений обязательно скобки и return
    a *= 2;
    b *= 2;
    return a * b;
}
console.log(moreAction(2,2));

const returnObj = (str = '') => {   // использование с return
    return {
        value: str,
        length: str.length
    }
}

const returnObj2 = (str = '') => ( // использование с круглыми скобками
    {   
        value: str,
        length: str.length 
    }
)

console.log(returnObj('wasd'), returnObj2('return'));





const obj = {
    firstName: 'Evgren',
    age: 30,
    getFirstName(){
        console.log(this)
    },
    getAgeArrow: null,
    getAge(){
        this.getAgeArrow = () => console.log(this); // обходим отсутствие контекста с помощью записи в в промежуточное свойство.
        setTimeout(() => console.log(this));  // выполнение callback используем без потери контекста. 
    }
}
obj.getAge();
obj.getAgeArrow();





// обычная функция:
// 1) псевдоколлекция arguments function plusFoo(x,y){
    // console.log(arguments)    Устарело!!!!
//}




// стрелочные функции (Методы массивов, различные коллбек  -- часто используются)
// 1) Не создает собственный контекст. Он является контекстом из предыдущей функции по блоку.
// 2) Не могут быть использованы для создания объектов (new)
// 3) Фича деструктуризации: Параметр ...args собирает все аргументы преданные при вызове стрелочной функции: 
// 4) Если стрелочная функция содержит в теле одну инструкцию, и ты опустил фигурные скобки, тогда выражение будет возвращено автоматически.
// 5) Значение this внутри метода созданного с помощью стрелочной функции всегда объект класса. Не требует жесткой привязки bind.
// 6)



