const assert = require('assert');
const arrayFunctions = require('../modules/ArrayLib');

describe('Array functions library', function () {
  const arr = [1, 2, 3]
  var resultArray = arr.slice(0)
  arrayFunctions.forEach(resultArray, function (arrItm, i, arr) { arr[i] += i })
  it('forEach', () => {
    assert.deepEqual(resultArray, [1, 3, 5])
  })

  it('map', () => {
    assert.deepEqual(arrayFunctions.map(arr, function (arrItm, i) { return arrItm * i }), [0, 2, 6])
  })

  it('take', () => {
    assert.deepEqual(arrayFunctions.take(arr, 2), [1, 2])
  })

  it('skip', () => {
    assert.deepEqual(arrayFunctions.skip(arr, 2), [3])
  })

  it('reduce', () => {
    assert.deepEqual(arrayFunctions.reduce(arr, function (faktorial, arrItm) { return faktorial *= arrItm }, 1), 6)
  })

  it('filter', () => {
    assert.deepEqual(arrayFunctions.filter(arr, function (arrItm, i) { return arrItm % 2 === 0 }), [2])
  })
})
