const obj = {
    a: {
      b: {
        c: {
          d: 'Привет!'
        }
      }
    }
  }
//   let n = 0;
//   let chain = ["a", "b", "c", "d"];
  function optionalChaining (obj) {
   
    console.log(obj.value); // выводим текущий элемент

    if (obj.next) {
        optionalChaining(obj.next); // делаем то же самое для остальной части списка
    }
    return obj.value
  }
optionalChaining(obj);