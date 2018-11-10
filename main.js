// https://tproger.ru/translations/frontend-testing-2/
const arrayFunctions = require('./modules/ArrayFunction')

var arr = [1,2,3,4,5];
console.log('foreach');
arrayFunctions.forEach(arr,function(a,i){ console.log('a['+i+']='+a)});
