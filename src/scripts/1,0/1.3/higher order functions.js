// функции в js являются объектами (особыми объектами)
// функции высшего порядка - которые принимаю в качестве параметров другие функции или возвращают функции. (Map, filter, addEventLister)
// callback - функции которые были вызваны в качестве параметра.
// примеры

// const arr = ['Evgeny', 'Lubov', 'Alex', 'Maxmim'];
// let newArr =[];
// for(let i=0; i<arr.length; i++){
//     newArr.push(arr[i].length);
// }
// console.log(newArr);

const arr = ['Evgeny', 'Lubov', 'Alex', 'Maxmim'];

function mapArray(arr, fn) { // получает на fn название функции указанное при вызове. 
    let newArr =[];
     for(let i=0; i<arr.length; i++){
        newArr.push(fn(arr[i]));
     }
    
     return newArr;
}

function nameLength(el){
  return el.length; // вернет длину элемента.
}

function nameUpper(el){
    return el.toUpperCase(); // Вернет все заглавными.
  }
const result = mapArray(arr, nameLength);
const result2 =  mapArray(arr, nameUpper);
console.log(result, result2);






function greeting(firstName){ 
  return function(lastName){
    return`Hello: ${firstName} ${lastName}`;
  }
}
// const greed = greeting('Evgen');
// const result3 = greed('Loginov');

 const fullName = greeting('Evgen')('Loginov');
console.log(fullName);


console.clear();

function question (job){
  
  const jobType = {
    developer: 'что такое JS?',
    teacher: 'какой предмет вы ведете?'
  }

  return function (nm){
        return `${nm}, ${jobType[job]}`;
      }


  // if(job === 'developer'){
  //   return function (nm){
  //     return `${nm}, что такое JS`;
  //   }
  // } else if(job === 'teacher'){
  //   return function (nm){
  //   return `${nm}, какой предмет вы ведете?`;
  //   }
  // }
}

const develoeprQueston = question('teacher')('asd');

console.log(develoeprQueston);












// const array = [ решение практического задания
//   { 'user': 'barney',  'age': 36, 'active': false },
//   { 'user': 'fred',    'age': 40, 'active': true },
//   { 'user': 'pebbles', 'age': 1,  'active': false }
// ];;
// const res = [];
// let trueArray = [];
// let falseArray = [];
// function partition(array, callback){  
//   for(let i = 0; i < array.length; i++){
//       callback(array[i]);
//   }
//   res.push(trueArray, falseArray);
//   return res;
// }
// function callback(element){

//   if(element.active === true){
//       trueArray.push(element);
//       return trueArray;
//   }
//   else{
      
//       falseArray.push(element);
//       return falseArray;
//   }
  
// }

// console.log(partition(array, callback));
// console.log(trueArray , falseArray);