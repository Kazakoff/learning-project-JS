var arrayLib = function () {
  function chain (initArray) {
    var arr = initArray.slice(0);
    return {
      take: function (count) {
        arr = take(arr, count);
        return this;
      },
      skip: function (count) {
        arr = skip(arr, count);
        return this;
      },
      value: function () { return arr; }
    };
  }

  function foreach (a, callback, thisForCallback) {
    var i;
    var length = a.length;
    for (i = 0; i < length; i++) {
      callback.call(thisForCallback, a[i], i, a);
    }
  }

  function map (a, callback, thisForCallback) {
    var i;
    var mapedArr = [];
    for (i = 0; i < a.length; i++) {
      mapedArr.push(callback.call(thisForCallback, a[i], i, a));
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
    var length = a.length;
    for (var i = 0; i < length; i++) {
      accumulate = callback(accumulate, a[i], i, a);
    }
    return accumulate;
  }

  function filter (a, callback, thisForCallback) {
    var filteredArr = [];
    for (let i = 0; i < a.length; i++) {
      if (callback.call(thisForCallback, a[i], i, a)) filteredArr.push(a[i]);
    }
    return filteredArr;
  }

  return {
    chain: chain,
    foreach: foreach,
    map: map,
    take: take,
    skip: skip,
    reduce: reduce,
    filter: filter
  };
};
