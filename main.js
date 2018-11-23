// https://tproger.ru/translations/frontend-testing-2/
// var arr = [1, 2, 3, 4, 5];

// const arr = [1, 2, 3];

const arrayFunctions = require('./modules/ArrayLib');
arrayFunctions.chain([1, 2, 3, 4, 5]).take(2).skip(1).value();

