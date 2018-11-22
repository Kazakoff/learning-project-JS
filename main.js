// https://tproger.ru/translations/frontend-testing-2/
// var arr = [1, 2, 3, 4, 5];

// const arr = [1, 2, 3];


var arrayLib1 = require('./modules/ProbeLib').arrayLib();

console.log(arrayLib1.chain([1, 2, 3, 4, 5]).take(2).value());
// console.log(arrayLib1.foreach([1, 2, 3, 4, 5], function (ai) { console.log(ai); }));
