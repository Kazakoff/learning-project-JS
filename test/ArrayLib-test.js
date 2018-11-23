/* eslint-disable node/no-deprecated-api */
/* eslint-disable no-undef */
const assert = require('assert');
const arrayFunctions = require('../modules/ArrayLib');
const arr = [1, 2, 3];

describe('ArrayLib', function () {
  it('[1,2,3,4,5] -> [2]', () => {
    assert.deepEqual(arrayFunctions.chain([1, 2, 3, 4, 5]).take(2).skip(1).value(), [2]);
  });

  it('foreach', () => {
    var resultArray = arr.slice(0);
    arrayFunctions.foreach(resultArray, function (arrItm, i, arr) { arr[i] += i; });
    assert.deepEqual(resultArray, [1, 3, 5]);
  });

  it('map', () => {
    assert.deepEqual(arrayFunctions.map(arr, function (arrItm, i) { return arrItm * i; }), [0, 2, 6]);
  });

  it('take', () => {
    assert.deepEqual(arrayFunctions.take(arr, 2), [1, 2]);
  });

  it('skip', () => {
    assert.deepEqual(arrayFunctions.skip(arr, 2), [3]);
  });

  it('reduce', () => {
    assert.deepEqual(arrayFunctions.reduce(arr, function (faktorial, arrItm) { return faktorial *= arrItm; }, 1), 6);
  });

  it('filter', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(arrayFunctions.filter(arr, function (arrItm, i) { return arrItm % 2 === 0; }), [2, 4, 6]);
  });
});

