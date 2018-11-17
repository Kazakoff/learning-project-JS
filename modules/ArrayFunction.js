
(function () {
  module.exports.forEach = function chain (a) {
    var innerArray = a.slice(0)
    return this
  }

  module.exports.take = function take (a, count) {
    if (arguments.length === 2) { return a.slice(0, count) } else { return this.slice(0, count) }
    
  }

  module.exports.skip = function skip (a, count) {
    return a.slice(count)
  }

  module.exports.forEach = function foreach (a, callback) {
    var i
    var length = a.length
    for (i = 0; i < length; i++) {
      callback(a[i], i, a)
    }
  }
  module.exports.map = function map (a, callback) {
    var i
    var mapedArr = []
    for (i = 0; i < a.length; i++) {
      mapedArr.push(callback(a[i], i, a))
    }
    return mapedArr
  }

  module.exports.reduce = function reduce (a, callback, initialValue) {
    var accumulate = initialValue || 0
    var length = a.length
    for (var i = 0; i < length; i++) {
      accumulate = callback(accumulate, a[i], i, a)
    }
    return accumulate
  }

  module.exports.filter = function filter (a, callback, thisForCallback) {
    var i
    var filteredArr = []
    for (i = 0; i < a.length; i++) {
      if (callback.call(thisForCallback, a[i], i, a)) filteredArr.push(a[i])
    }
    return filteredArr
  }
})()
