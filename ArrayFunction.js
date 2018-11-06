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
    return { foreach: foreach,
        map:map
    }
} ())