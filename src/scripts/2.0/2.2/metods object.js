let obj = {
    name: 'Evgeny',
    info: {
        skills: ['html', 'css', 'js']
    }
}
let obj2 = {
    name: 'Ivan',
    age: 30
}

let arr = [['fire', 'water'], ['each', 'air']]
let newObj = obj;  // объекты копируются по ссылке. Создается ссылка на obj. Если изменить newObj то измениться и obj. 
console.log(newObj);


// Object.assign - принимает 2 параметра 1) target - куда копируем. 2) source - откуда копируем. 
let newObjAssign = Object.assign({}, obj2, obj); // таким методом создается новый объект который не влияет на obj. Можно объединить несколько объектов.
// положение порядок важно!!!
console.log(newObjAssign);

let newObjAssign1 = Object.assign({}, obj) // можно копировать объект из объекта. внутренние копируются по ссылке. 
console.log(newObjAssign1.info === obj.info);

// JSON
let objJSON =  JSON.stringify(obj); // переводит в специальную строку. 
objJSON = JSON.parse(objJSON); // переводит в объект который не ссылается на оригинал.  
// короткая запись objJSON = JSON.parse(JSON.stringify(obj));
console.log(objJSON);

// keys
let keys = Object.keys(obj); // возвращает массив из ключей объекта. можно дальше прописывать методы массивов.
console.log(keys); 


// values
let values = Object.values(obj); // возвращает массив из значений объекта. можно дальше прописывать методы массивов.
console.log(values);

// entries
let objEntries = Object.entries(obj2)  // возвращает массив массивов с парами ключ - значение. 
console.log(objEntries);

objEntries = Object.fromEntries(arr); // возвращает объект из массивов. простой массив не переделает. 
console.log(objEntries);









const firstObject = {
    a: {
      b: {
        c: 1,
        d: 'string',
        e: {
          num: 1
        }
      }
    }
  };
  
  const secondObject = {
    a: {
      b: {
        e: {
          num: 1,
        },
        d: 'string',
        c: 1,
      }
    }
  };




  function deepEqual (obj1, obj2) {
    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
      }
      const aKeys = Object.keys(obj1);
      const bKeys = Object.keys(obj2);
      if (aKeys.length !== bKeys.length) {
        return false;
      }
      return aKeys.every(
        (key) => bKeys.includes(key) && deepEqual(obj1[key], obj2[key]),
      );

  }

console.log(deepEqual(firstObject, secondObject));