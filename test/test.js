const assert = require("assert")
const arrayFunctions = require('../ArrayFunction')

 describe('forEach', function () {
  const arr = [1,2,3];
it('standart', () => {
  assert.deepEqual(arrayFunctions.map(arr,function(arrI, i){return arrI*i}), [0,2,6]);
} );
} );
describe('map', function () {
    const arr = [1,2,3];
  it('standart', () => {
    assert.deepEqual(arrayFunctions.map(arr,function(arrI, i){return arrI*i}), [1,4,9]);
  } );
 } );


