var arrKMod = (function (){
    function foreach(a, callback, thisK){
        var i;
        var length = a.length;
        for (i = 0; i < length; i++) {
        callback.call(thisK, a[i], i, a);
        }
    }
   
    return { foreach: foreach
    }
} ())