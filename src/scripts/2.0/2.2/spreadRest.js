const rusCity = ['Новокузнецк', 'Новосибирск', 'Москва', 'Питер'];
const eurCity = ['Лондон','Прага','Берлин', 'Монако'];

console.log(...rusCity) // spread это ... преобразовывает массив в строку. разворачивает.

const allCites = [...rusCity];
const allCites2 = [...rusCity, ...eurCity]; // объединяем  массив. 
console.log(allCites2, allCites);
const allCites3 = [...rusCity, 'Вашингтон', ...eurCity]; // сочетается с другими действиями. Заменяет concat. 
console.log(allCites3);

// работа с объектами через spread
const obj1 = {
    color: "purple",
    type: "minivan",
    registration: new Date('2017-01-03'),
    capacity: 7
  };

  const obj2 = {
    color: "red",
    type: "station wagon",
    registration: new Date('2018-03-03'),
    capacity: 5,
    testKey: 123
  };

  console.log({...obj1, ...obj2});  // используем для клонирования объекта. нужно вкладывать в объект. 
  // если объекты имеют разные ключи то добавит в общий объект. Одинаковые заменит.
  // merge - процесс совмещения.

  // Практическое примененние


const num = [5, 37, 42, 17];
  console.log(Math.max(...num)); // если не использовать spread вернет NaN

  const divs = document.querySelectorAll('div');
  console.log([...divs]);  // преобразовывает nodelist с ограниченным списком к обычному массиву. 

  // rest - собирает параметры в массив или объект.


const num1 = [1, 2, 3, 4]
  function sum (a, b, ...rest){   // ЗДЕСЬ в ФУНКЦИИ ... это оператор rest, хранит массив оставшихся элементов. Назвать можно как переменную, 
    console.log(rest); 
    return a + b + rest.reduce((a, i) => a + i, 0) // суммирует не зависимо даже если добавим еще значений. 
  }
 
console.log(sum(...num1));

const [a, b, ...other] = num;  // деструктуризация. ...rest
console.log(a,b, other);


const objRest = {
    color: "purple",
    type: "minivan",
    registration: 56,
    capacity: 7
  };


  const {color, ...objOther} = objRest; // выбираем отдельные значения по ключам объекта. 
  console.log(color, objOther);