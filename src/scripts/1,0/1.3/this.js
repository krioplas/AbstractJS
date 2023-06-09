function getThis(){
    console.log(this);
    
}
getThis();

function getPrice(){      // можно указать как свойство всю функцию ли просто ее вызов.
    console.log(this.price);
    return this;   // возвращает весь объект для дальнейшего метода. 
}
function getName() {
    console.log(this.name);
    return this;
}


const dev = {
    name: 'intel',
    price: 10,
    getPrice,
    getName() {
        console.log(this.name);
    },
    info: {
        inform: ['2.3 gft'],
        getInfo: function(){
            console.log(this);
        }
    }
}
dev.getPrice();
dev.info.getInfo();
dev.getName();


const dev2 = {
    name : 'amd',
    price: 50,
    getPrice,
};
dev2.getPrice(); // Вызываем уже созданную функцию к новому объекту.
dev2.getName = dev.getName;  // функция getName объявлена в dev но мы можем присвоить ее и dev2 и вызвать.
dev2.getName();

let str = 'Hello word';
const reversStr = str
.split('')
.reverse()
.join(''); // несколько методов подряд вызов методов цепочки. (каждый метод возвращает объект у которого есть следующий метод)
// .push('Hello') например вызовет ошибку, т.к. у строки нет метода push
 console.log(reversStr);


// вызов цепочки методов написанных самостоятельно

const prod3 = {
    name: 'ARM',
    price: 200,
    getPrice,
    getName
}
prod3.getName().getPrice(); // что бы это сработало нужно что бы каждый метод вернул this(текущий объект)


function getPriceCur(currens = '$'){
     console.log(this.price + ' ' + currens)
}

const prod4 = {
    name: 'Nvidia',
    price: 150
}

getName.call(prod4)   // вызов у функции метода call - позволяет вызывать функции не указанные в объекте как ключ. в скобка пишем объект который необходимо обработать.
getPriceCur.call(prod4, 'r') // передает доп параметр вместе с name или используем тот что по дефолту
getPriceCur.apply(prod3, ['a']) // тоже что и call но аргументы передаются в качестве массива.




const getPriceBund = dev2.getPrice.bind(dev2); //  в новую переменную записываем вызов объект.метод. bind(объект prod3 (this), другие аргументы сколько угодно


setTimeout(getPriceBund, 1000);



// const createObjectCalculator = (ini tialA, initialB) => {
//     let calculator = {
//       a: initialA,
//       b: initialB,
//       read(a, b) {
//         this.a = a;
//         this.b = b;
//       },
  
//       sum() {
//         return this.a + this.b;
//       },
  
//       mul() {
//         return this.a * this.b;
//       },
//     };
//     return calculator;
//   };
  
  
//   const calculator = createObjectCalculator(2, 3);
//   console.log(calculator.sum()); // 5
//   console.log(calculator.mul()); // 6
//   calculator.read(12, 34);
//   console.log(calculator.sum()); // 46
//   console.log(calculator.mul()); // 408