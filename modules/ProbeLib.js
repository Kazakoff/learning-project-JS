var arrayLib = (function () {
  function chain (initArray) {
    var arr = initArray.slice(0);
    return {
      take: function (count) {
        arr = take(arr, count);
        return this;
      },
      value: function () { return arr; }
    };
  }
  function take (a, count) {
    return a.slice(0, count);
  }
  var t = 5;
  return {
    chain: chain,
    take: take
  };
})();
