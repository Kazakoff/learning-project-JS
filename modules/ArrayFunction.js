
module.exports.forEach = function foreach (a, callback, thisForCallback) {
  var i
  var length = a.length
  for (i = 0; i < length; i++) {
    callback.call(thisForCallback, a[i], i, a)
  }
}
module.exports.map = function map (a, callback, thisForCallback) {
  var i
  var mapedArr = []
  for (i = 0; i < a.length; i++) {
    mapedArr.push(callback.call(thisForCallback, a[i], i, a))
  }
  return mapedArr
}

module.exports.take = function take (a, count) {
  /* var mapedArr = [];
        var takeCount = count>a.length ? a.length : count
        for (var i = 0; i < takeCount; i++) {
            mapedArr.push(a[i]);
        }
        return mapedArr;
        */
  return a.slice(0, count)
}

module.exports.skip = function skip (a, count) {
  /* var mapedArr = []
  for (var i = count; i < a.length; i++) {
    mapedArr.push(a[i])
  } */
  return a.slice(count)
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
