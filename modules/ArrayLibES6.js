class chain {
  constructor (initArray) {
    this.arr = initArray.slice(0);
  }
  libCall (f) {
    return function () {
      var fb = f.bind(this, this.arr);
      this.arr = fb.apply(this, arguments);
      return this;
    };
  }
  take () { this.libCall(take); }
  skip () { this.libCall(skip); }
  foreach () { this.libCall(foreach); }
  map () { this.libCall(map); }
  value () {
    return this.arr;
  }
}
function sum (array, start, end) {
  var cache = {};
  let cacheId = array + '-' + start + ',' + end;
  if (cacheId in cache) {
    return cache[cacheId];
  } else {
    let s = 0;
    for (let i = start; i <= end; i++) {
      s += array[i];
    }
    cache[cacheId] = s;
    return s;
  }
}

function foreach (a, callback) {
  for (let i = 0; i < a.length; i++) {
    callback(a[i], i, a);
  }
}

function map (a, callback) {
  var mapedArr = [];
  for (let i = 0; i < a.length; i++) {
    mapedArr.push(callback(a[i], i, a));
  }
  return mapedArr;
}

function take (a, count) {
  return a.slice(0, count);
}

function skip (a, count) {
  return a.slice(count);
}

function reduce (a, callback, initialValue) {
  var accumulate = initialValue || 0;
  for (var i = 0; i < a.length; i++) {
    accumulate = callback(accumulate, a[i], i, a);
  }
  return accumulate;
}

function filter (a, callback) {
  var filteredArr = [];
  for (let i = 0; i < a.length; i++) {
    if (callback(a[i], i, a)) filteredArr.push(a[i]);
  }
  return filteredArr;
}

module.exports.chain = chain;
module.exports.filter = filter;
module.exports.reduce = reduce;
module.exports.skip = skip;
module.exports.take = take;
module.exports.map = map;
module.exports.foreach = foreach;
module.exports.sum = sum;
