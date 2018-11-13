const assert = require("assert")
const arrayFunctions = require('../modules/ArrayFunction')

 describe('forEach', function () {
  const arr = [1,2,3];
  var resultArray = arr.slice(0);
  arrayFunctions.forEach(resultArray,function(arrItm, i, array){array[i] += i})
it('standart', () => {
  assert.deepEqual(resultArray, [1,3,5]);
} );



} );

describe('map', function () {
    const arr = [1,2,3];
  it('standart', () => {
    assert.deepEqual(arrayFunctions.map(arr,function(arrItm, i){return arrItm*i}), [0,2,6]);
  } );
 } );

 describe('take', function () {
  const arr = [1,2,3];
it('standart', () => {
  assert.deepEqual(arrayFunctions.take(arr,2), [1,2]);
} );
} ); 

describe('skip', function () {
  const arr = [1,2,3,4];
it('standart', () => {
  assert.deepEqual(arrayFunctions.skip(arr,2), [3,4]);
} );
} ); 

 describe('reduce', function () {
  const arr = [1,2,3];
it('standart', () => {
   assert.deepEqual(arrayFunctions.reduce(arr,function(faktorial, arrItm){return faktorial *= arrItm},1), 6);
} );
} );

 describe('filter', function () {
  const arr = [1,2,3,4,5,6];
it('standart', () => {
  assert.deepEqual(arrayFunctions.filter(arr,function(arrItm, i){return arrItm % 2 == 0}), [2,4,6]);
} );
} );


