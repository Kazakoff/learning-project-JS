module.exports.foreach = function foreach(a, callback, thisaForCallback){
        var i;
        var length = a.length;
        for (i = 0; i < length; i++) {
            callback.call(thisaForCallback, a[i], i, a);
        }
    }

module.exports.map = function map(a, callback, thisaForCallback){
        var i;
        var mapedArr = new Array();
        for (i = 0; i < a.length; i++) {
            mapedArr.push(callback.call(thisaForCallback, a[i], i, a));
        }
        return mapedArr;
    }  

module.exports.take = function take(a, count){
        var mapedArr = new Array();
        var takeCount = count>a.length ? a.length : count
        for (var i = 0; i < takeCount; i++) {
            mapedArr.push(a[i]);
        }
        return mapedArr;
    }  

module.exports.skip = function skip(a, count){
        var mapedArr = new Array();
        for (var i = count; i < a.length; i++) {
            mapedArr.push(a[i]);
        }
        return mapedArr;
    }   
    
module.exports.reduce = function reduce(a, callback, initialValue ){
        var accumulate = initialValue ? initialValue : 0;
        for (var i = 0; i < count; i++) {
            callback(accumulate, a[i], i, a);
        }
        return accumulate;
    } 
    
module.exports.filtetr = function filter(a, callback, thisaForCallback){
        var i;
        var filteredArr = new Array();
        for (i = 0; i < a.length; i++) {
           if(callback.call(thisaForCallback, a[i], i, a)) filteredArr.push(a[i]);
        }
        return mapedArr;
    }  
