
const assert = require('assert');
require('jasmine-node');
const arrayFunctions = require('../modules-dist/ArrayLib');
const arr = [1, 2, 3];

describe('ArrayLib', function () {
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr2 = [5, 6, 7, 8, 9];
  it('cash sum [1, 2, 3, 4, 5, 6, 7, 8, 9] 0,3', function () {
    expect(arrayFunctions.sum(arr1, 0, 3)).toBe(10);
  });

  it('cash sum  [1, 2, 3, 4, 5, 6, 7, 8, 9]1,3', () => {
    expect(arrayFunctions.sum(arr1, 1, 3)).toBe(9);
  });

  it('cash sum [1, 2, 3, 4, 5, 6, 7, 8, 9] cash 1,3', () => {
    expect(arrayFunctions.sum(arr1, 1, 3)).toBe(9);
  });
  it('cash sum [5, 6, 7, 8, 9] 1,3', () => {
    expect(arrayFunctions.sum(arr2, 1, 3)).toBe(21);
  });

  it('cash sum  [5, 6, 7, 8, 9] cash 1,3', () => {
    expect(arrayFunctions.sum(arr2, 1, 3)).toBe(21);
  });

  it('chain([1, 2, 3, 4, 5]).take(2).skip(1).value() -> [2]', () => {
    expect(arrayFunctions.chain([1, 2, 3, 4, 5]).take(2).skip(1).value()).toEqual([2]);
  });

  it('foreach', () => {
    var resultArray = arr.slice(0);
    arrayFunctions.foreach(resultArray, function (arrItm, i, arr) { arr[i] += i; });
    expect(resultArray).toEqual([1, 3, 5]);
  });

  it('map', () => {
    expect(arrayFunctions.map(arr, function (arrItm, i) { return arrItm * i; })).toEqual([0, 2, 6]);
  });
  it('chain map ', () => {
    expect(arrayFunctions.map(arr, function (arrItm, i) { return arrItm * i; }))
      .toEqual(arrayFunctions.chain(arr).map(function (arrItm, i) { return arrItm * i; }).value());
  });

  it('take', () => {
    expect(arrayFunctions.take(arr, 2)).toEqual([1, 2]);
  });

  it('skip', () => {
    expect(arrayFunctions.skip(arr, 2)).toEqual([3]);
  });

  it('reduce', () => {
    expect(arrayFunctions.reduce(arr, function (faktorial, arrItm) { return faktorial *= arrItm; }, 1)).toBe(6);
  });

  it('chain reduce ', () => {
    expect(arrayFunctions.reduce(arr, function (faktorial, arrItm) { return faktorial *= arrItm; }, 1))
      .toEqual(arrayFunctions.chain(arr).reduce(function (faktorial, arrItm) { return faktorial *= arrItm; }, 1).value());
  });

  it('filter', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(arrayFunctions.filter(arr, function (arrItm, i) { return arrItm % 2 === 0; })).toEqual([2, 4, 6]);
  });
});
