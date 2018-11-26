
const arrayFunctions = require('./modules/ArrayLib');


var d = arrayFunctions.chain([1, 2, 3]).reduce(function (faktorial, arrItm) { return faktorial *= arrItm; }).value();
