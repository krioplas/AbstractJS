// map - ассоциативный массив у которого ключ может быть все что угодно(объект) БЕЗ ПРИВЕДЕНИЯ ТИПОВ ПЕРЕМЕННЫХ
// итеррируемый объект. можно перебрать в for of
// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
let set = 45;
const map = new Map([
    ['hi', 'Priv'],
    [true, 46],
    [34, 'true']
]);
map.set('set', 'добавляет ключ и значение');
map.set(set, 'добавляет ключ и значение'); // если прописать переменную то добавит ее значение.
map.set(NaN, 'Даже так работает') 

console.log(map.keys()); // получаем объект с ключами для перебора mapIterator/
console.log([...map.keys()]); //  если использовать spread то получаем массив ключей
console.log([...map.values()]); // возвращает массив со значениями.
console.log([...map.entries()]); // возвращает массив массивов с парами ключ значение. 
const map2 = new Map(map.entries()); // Так же можно использовать для клонирования как и объект. 
console.log(map.size, 'size - выводит размер map');
console.log(map.get(34), 'get - выводит значение по ключу'); 
console.log(map.has(44), 'has - проверяет наличие значения по ключу. если есть true'); 
map.delete('hi'); // удаляет строку по ключу
map.clear(); // очищает полностью map


console.clear();

const [[key, value], second, third] = map2; // первое [key, value] выведет только строки с данными. Деструктуризация. 

console.log(key, value ,second, third);

// перебор Map

for (let [key, value] of map2){
    console.log(key, value);
}
map2.forEach((value, key, map2) => console.log(value));
