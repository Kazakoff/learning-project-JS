var arrayFuncModule = (function (){
    function foreach(a, callback, thisaForCallback){
        var i;
        var length = a.length;
        for (i = 0; i < length; i++) {
            callback.call(thisaForCallback, a[i], i, a);
        }
    }

    function map(a, callback, thisaForCallback){
        var i;
        var mapedArr = new Array();
        for (i = 0; i < a.length; i++) {
            mapedArr.push(callback.call(thisaForCallback, a[i], i, a));
        }
        return mapedArr;
    }  

    function take(a, count){
        var mapedArr = new Array();
        for (var i = 0; i < count; i++) {
            mapedArr.push(a[i]);
        }
        return mapedArr;
    }   
    
    function reduce(a, callback, initialValue ){
        var accumulate = initialValue ? initialValue : 0;
        for (var i = 0; i < count; i++) {
            callback(accumulate, a[i], i, a);
        }
        return accumulate;
    } 
    
    function filter(a, callback, thisaForCallback){
        var i;
        var filteredArr = new Array();
        for (i = 0; i < a.length; i++) {
           if(callback.call(thisaForCallback, a[i], i, a)) filteredArr.push(a[i]);
        }
        return mapedArr;
    }  

    return { foreach: foreach,
             map:map,
             take:take
    }
} ())