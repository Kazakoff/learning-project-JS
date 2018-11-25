
const arrayFunctions = require('./modules/ArrayLib');


var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = [5, 6, 7, 8, 9];

arrayFunctions.sum(arr1, 0, 3);
arrayFunctions.sum(arr1, 1, 3);
arrayFunctions.sum(arr2, 1, 3);

var d = [];
d.cash = {};
d.cash[1 + ',' + 2] = 2;
d.cash[d.cash['1,2'] + ',' + 2] = 2;
d.cash[3 + ',' + 3] = 2;
console.log(d.cash);
