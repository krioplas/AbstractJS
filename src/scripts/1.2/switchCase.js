let a = 0;
let b = 0;

// if(a > 0){
//     b = a;
// }
// else{
//     b += 1;
// }

// выражение(условие) ?(сам оператор) если true : если false

// let c = a > 0 ? b = a : b += 1;
// чему равна переменная от каких то условий
b = a > 0 ? a : b === 0 ? 65 : 98; // правильная запись. Тенарный оператор возвращает значение из true или false

console.log(`b: ${b}`);


// swithCase если известно значение переменных из списка

let color = 'grin';

switch(color){
    case 'red' : // склеивание кейсов
    case 'black' :
        color = 'yellow'
        console.log(color || 'elloy');
        break;
    default: 
    console.log(' not color');
}