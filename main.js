// https://tproger.ru/translations/frontend-testing-2/
// var arr = [1, 2, 3, 4, 5];

const arrayLib = require('./modules/ArrayLib');
const arr = [1, 2, 3];
const arrayFunctions = arrayLib.arrayLib();
arrayFunctions.chain([1, 2, 3, 4, 5]).take(2).skip(1).value();

var resultArray = arr.slice(0);
arrayFunctions.foreach(resultArray, function (arrItm, i, arr) { arr[i] += i; });
