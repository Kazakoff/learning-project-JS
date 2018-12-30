class Chain {
  constructor(initArray) {
    this.arr = initArray.slice(0);
    this.take = this.curringFunc(Chain.take);
    this.skip = this.curringFunc(Chain.skip);
    this.foreach = this.curringFunc(Chain.foreach);
    this.map = this.curringFunc(Chain.map);
  }
  curringFunc(func) {
    return () => {
      let fb = func.bind(this, this.arr);
      this.arr = fb.apply(this, arguments);
      return this;
    };
  }
  value() {
    return this.arr;
  }

  static sum(array, start, end) {
    let cache = {};
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

  static foreach(a, callback) {
    for (let i = 0; i < a.length; i++) {
      callback(a[i], i, a);
    }
  }

  static map(a, callback) {
    let mapedArr = [];
    for (let i = 0; i < a.length; i++) {
      mapedArr.push(callback(a[i], i, a));
    }
    return mapedArr;
  }

  static take(a, count) {
    return a.slice(0, count);
  }

  static skip(a, count) {
    return a.slice(count);
  }

  static reduce(a, callback, initialValue) {
    var accumulate = initialValue || 0;
    for (let i = 0; i < a.length; i++) {
      accumulate = callback(accumulate, a[i], i, a);
    }
    return accumulate;
  }

  static filter(a, callback) {
    var filteredArr = [];
    for (let i = 0; i < a.length; i++) {
      if (callback(a[i], i, a)) filteredArr.push(a[i]);
    }
    return filteredArr;
  }
}
module.exports.Chain = Chain;
/* module.exports.filter = filter;
module.exports.reduce = reduce;
module.exports.skip = skip;
module.exports.take = take;
module.exports.map = map;
module.exports.foreach = foreach;
module.exports.sum = sum;
*/