module.exports = (function () {
  function chain (initArray) {
    var arr = initArray.slice(0);
    function libCall (f) {
      return function () {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(arr);
        arr = f.apply(this, args);
        return this;
      };
    }
    return {
      take: libCall(take),
      skip: libCall(skip),
      foreach: libCall(foreach),
      map: libCall(map),
      reduce: libCall(reduce),
      value: function () { return arr; },
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
