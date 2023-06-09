// set - множество что тот вроде массива. хранятся только уникальные значения.
// например для хранения классов для DOM - элемента. т.к. только уникальные элементы.

const set  = new Set(['button', 'active', 'small']);
const set2 = new Set('button');
const set3 = new Set(['button']);
// const set4 = new Set(45); у чисел нет такого метода. потому будет ошибка. 
// можно клонировать если добавить другой Set
set3.add('detroit').add('Moscow') // добавляем элемент в Set. Добавляет только уникальные элементы. Можем вызвать по цепочке
set.size; // узнать кол-во элементов
set.has('button'); // узнать есть ли там такой элемент.true или false

console.log(set3, set2);
console.log(set.has('button'));

// добавление объектов в Set
const set4 = new Set();
set4.add({
    className: 'button'
})
console.log(set4.has({className: 'button'})); 
// если добавить сразу то не будет показывать есть или нет. А если через add то будет. Объект это ссылочный тип данных потому false/

const set5 = new Set();
const buttonRef = {className: 'button'};
set5.add(buttonRef);
console.log(set5.has(buttonRef));
// если заранее записать в переменную. то поиск пройдет нормально и покажет true/
// set.delete('delete') - удаление элементов из Set.
// set.clear(); - очищает Set.

// Set - нет метода для получения доступа к отдельным элементам. нет понятия индекс.
// так же методы values, keys, entries
console.log(set.values()); 
console.log([...set.values()]); // преобразовываем в обычный массив. 
console.log([...set.keys()]); // нет понятия ключ. Вернет значения. 
console.log(set.entries()); // т.к. у Set нет понятия ключ то вернет [value, value]
console.log([...set]);
console.log(Array.from(set)); // так же создаст массив со значениями. 

// перебор Set

for(let item of set){ // так как нет ключей обычный цикл не подходит. 
    console.log(item);
}
set.forEach(element => console.log(element))