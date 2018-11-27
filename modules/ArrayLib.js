module.exports = (function () {
  function chain (initArray) {
    var arr = initArray.slice(0);
    function libCall (f) {
      var libFun = arguments[0];
      arguments[0] = arr;
      arr = libFun.apply(this, arguments);
      return this;
    }
    return {
      take: function (count) {
        return libCall.call(this, take, count);
      },
      skip: function (count) {
        return libCall.call(this, skip, count);
      },
      foreach: function (callback) {
        return libCall.call(this, skip, callback);
      },
      map: function (callback) {
        return libCall.call(this, map, callback);
      },
      reduce: function (callback, initialValue) {
        return libCall.call(this, reduce, callback, initialValue);
      },
      filter: function (callback) {
        return libCall.call(this, reduce, callback);
      },
      value: function () { return arr; }
    };
  }

  var sum = (() => {
    var cache = {};
    return function (array, start, end) {
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
    };
  })();

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

  return {
    sum: sum,
    chain: chain,
    foreach: foreach,
    map: map,
    take: take,
    skip: skip,
    reduce: reduce,
    filter: filter
  };
})();
