var arrayLib = (function () {
  var arr = [];
  return {
    chain: function chain (initArray) {
    this.arr = initArray.slice(0);
    return this { 
      
    };
  }

  foreach: function foreach (a, callback, thisForCallback) {
    var i;
    var length = a.length;
    for (i = 0; i < length; i++) {
      callback.call(thisForCallback, a[i], i, a);
    }
  }
  map: function map (a, callback, thisForCallback) {
    var i;
    var mapedArr = [];
    for (i = 0; i < a.length; i++) {
      mapedArr.push(callback.call(thisForCallback, a[i], i, a));
    }
    return mapedArr;
  }

  take: function take (a, count) {
    return a.slice(0, count);
  }

  skip: function skip (a, count) {
    return a.slice(count);
  }

  reduce: function reduce (a, callback, initialValue) {
    var accumulate = initialValue || 0;
    var length = a.length;
    for (var i = 0; i < length; i++) {
      accumulate = callback(accumulate, a[i], i, a);
    }
    return accumulate;
  }

  filter: function filter (a, callback, thisForCallback) {
    var i;
    var filteredArr = [];
    for (i = 0; i < a.length; i++) {
      if (callback.call(thisForCallback, a[i], i, a)) filteredArr.push(a[i]);
    }
    return filteredArr;
  }
};
})();
