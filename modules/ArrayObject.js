const arrayFunctions = require('./ArrayFunction')
module.exports.arrayObject = function ArrayObject (initArray) {
  this.arr = initArray.slice(0)
  this.take = function (count) {
    this.arr = arrayFunctions.take(this.arr, count)
    return this
  }
  this.skip = function (count) {
    this.arr = arrayFunctions.skip(this.arr, count)
    return this
  }
  this.value = function (count) {
    return this.arr
  }
}
