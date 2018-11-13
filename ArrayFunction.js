export const forEach = function foreach (a, callback, thisForCallback) {
  var i
  var length = a.length
  for (i = 0; i < length; i++) {
    callback.call(thisForCallback, a[i], i, a)
  }
}

export function map (a, callback, thisForCallback) {
  var i
  var mapedArr = []
  for (i = 0; i < a.length; i++) {
    mapedArr.push(callback.call(thisForCallback, a[i], i, a))
  }
  return mapedArr
}

export function take (a, count) {
  /* var mapedArr = [];
        var takeCount = count>a.length ? a.length : count
        for (var i = 0; i < takeCount; i++) {
            mapedArr.push(a[i]);
        }
        return mapedArr;
        */
  return a.slice(0, count)
}

export function skip (a, count) {
  /* var mapedArr = []
  for (var i = count; i < a.length; i++) {
    mapedArr.push(a[i])
  } */
  return a.slice(count)
}

export function reduce (a, callback, initialValue) {
  var accumulate = initialValue || 0
  var length = a.length
  for (var i = 0; i < length; i++) {
    accumulate = callback(accumulate, a[i], i, a)
  }
  return accumulate
}

export function filter (a, callback, thisForCallback) {
  var i
  var filteredArr = []
  for (i = 0; i < a.length; i++) {
    if (callback.call(thisForCallback, a[i], i, a)) filteredArr.push(a[i])
  }
  return filteredArr
}
