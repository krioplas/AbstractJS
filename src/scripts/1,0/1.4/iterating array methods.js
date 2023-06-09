// forEach - ничего не возвращает, перебирает массив. 
// filter - фильтрует массив по указанным функциям.
// map - возвращает новый массив (основываясь на результате вызова callback)
// reduce - разворачивает массив, делает из массива объект. 
// some - возвращает boolean если хоть один элемент удовлетворяет параметрам callback
// every - возвращает boolean если все элементы удовлетворяют параметрам callback
// sort - сортировка 
// find - поиск элемента. 


const mass = [
      {
        color: "purple",
        type: "minivan",
        registration: new Date('2017-01-03'),
        capacity: 7
      },
      {
        color: "red",
        type: "station wagon",
        registration: new Date('2018-03-03'),
        capacity: 5
      },
      {
        color: "black",
        type: "sedan",
        registration: new Date('2019-09-03'),
        capacity: 9
      }
    ]
// ForEach
mass.forEach((element, index, arr) => {   // здесь функция и есть callback   
    console.log(element, index, arr);
})

//Filter
const capacity = mass.filter(mass => mass.type === "sedan"); // указал в элементах сам массив заработало. добавляет в новый массив все что true из callback
console.log(capacity);

// Map

const carsMap = mass.map(mass => ({ // также три элемента как и у ForEach вернет массив с данными. 
    color: mass.color, 
    type: mass.type
}))  
console.log(carsMap);
console.clear();
// reduce
// acc - переменная в которой хранится результат предыдущей операции. 
const totalCapacity = mass.reduce((acc, mass)=> { // принимает два значения, callback и стартовое значение
    return acc += mass.capacity;
},0)
console.log(totalCapacity); 

const objReg = mass.reduce((acc, mass) => { // получаем объект объекта по определенному ключу.
    acc[mass.registration] = mass;
    return acc;
}, {});
console.log(objReg); 

// some/every
const isRed = mass.some(user => user.color === "red");
const isAllRed = mass.every(user => user.color === "red");  
console.log(isRed);
console.log(isAllRed);


// find
const isFind = mass.find(mas => mas.type === "sedan");
console.log(isFind);


// sort - меняет исходный массив. сортирует как строки, элементы массива

const strArr = ['Вика', 'Люба', 'Таня', 'Наташа'];
strArr.sort();
console.log(strArr);

const numArr = [3, 28, 86, 6];  // будет сортировать по первой цифре числа. 
numArr.sort((a, b) => a - b);  //  если положительное то переставит. 
console.log(numArr);


mass.sort((a, b) => a.capacity - b.capacity);
console.log(mass);