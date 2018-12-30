
const arrayFunctions = require('./modules-dist/ArrayLibES6');
var g = arrayFunctions.Chain.skip([1, 4, 5, 6], 2);
var i = new arrayFunctions.Chain([1, 2, 3, 4, 5]).take(2).skip(1).value();
// console.log(arrayFunctions.chain([1, 2, 3, 4, 5]).take(2).skip(1).value());
