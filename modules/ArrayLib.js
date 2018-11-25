module.exports = (function () {
  function chain (initArray) {
    var arr = initArray.slice(0);
    function getPart (f, count) {
      arr = f(arr, count);
      return this;
    }
    return {
      take: function (count) {
        return getPart.call(this, take, count);
      },
      skip: function (count) {
        return getPart.call(this, skip, count);
      },
      value: function () { return arr; }

    };
  }

  function sum (array, start, end) {
    let cashId = start + ',' + end;
    if (array.cash === undefined) array.cash = {};
    if (cashId in array.cash) {
      return array.cash[cashId];
    } else {
      let s = 0;
      for (let i = start; i <= end; i++) {
        s += array[i];
      }
      array.cash[cashId] = s;
      return s;
    }
  }
  function foreach (a, callback, thisForCallback) {
    for (let i = 0; i < a.length; i++) {
      callback.call(thisForCallback, a[i], i, a);
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
