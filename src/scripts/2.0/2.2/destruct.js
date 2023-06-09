// деструктуризация - 
function calc(a, b){
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}
const [...res] = calc(200,65);
// const sum = result[0];
// const sub = result[1];
console.log(res)

const [sum,,mult, ...other] = calc(100,65);
console.log(sum, mult, other)

// Работа с Object
const person = {
    name: 'Evgen',
    age: 30,
    address: {
        country: 'Russia',
        city: 'Novokuz'
    }
}
const {name: firstName = 'без имени', age, car = 'машина будет обязательно'} = person 
// через : указываем в какую переменную вывести значение ключа. Так же можем указывать дефолтное значение
console.log(firstName, age, car)
// работа с вложенными объектами
const {address: {city: homeTown, country: homeCountry}} = person   // обращение к вложенному массиву. 
console.log(homeTown, homeCountry);


const {name: fName, ...other1} = person; // используем rest
console.log(fName, other1)
// практическое применение

function allPers ({name, age}){  
// здесь деструктуризацию используем как способ получения переменных сразу на входе функции
    console.log(name + ' ' +  age)
}
allPers(person)










// задача на поиск одинаковых языков. 
const data = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
    { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
  ];
  const getLanguagesStatistic = (feedbacks) => {
    let res = [];
    const countItems = {};
    feedbacks.forEach(element => {
      if(element.year === 2019){
        let {language} = element;
        res.push(language);
        countItems[language] =  countItems[language] ? countItems[language] + 1 : 1;
      }
    });
   return countItems; 
  };
getLanguagesStatistic(data);