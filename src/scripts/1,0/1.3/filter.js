let a = [1, -9, 4, -8, 5, 7];

let b = [];
for (let i =0; i < a.length; i++){
    if (a[i] >=0) b.push(a[i]);
}
console.log(a);
console.log(b);


//  a.filter( function(currentValue, index){}
// currentValue - элемент что проверяется в массиве.
// index - индексы перебираемых элементов.
let c = a.filter( currentValue => {
    return currentValue % 2 === 0; // внутри функции пишем условие в return если true добавляется в новый массив.  
});
console.log(c);