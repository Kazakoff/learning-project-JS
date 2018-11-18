const arrayObjectModule = require('../modules/ArrayObject')
const assert = require('assert')

var arr = [1, 2, 3, 4, 5]

describe('forEach', function () {
  var arr1 = new arrayObjectModule.ArrayObject(arr)
  it('[1,2,3,4,5] -> [2]', () => {
    assert.deepEqual(arr1.take(2).skip(1).value(), [2])
  })
})
