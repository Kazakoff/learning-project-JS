var arrKMod = (function (){
    function foreach(a, callback){
        var i;
        var length = a.length;
        for (i = 0; i < length; i++) {
        callback( a[i], i, a);
        }
    }
   
    return { foreach: foreach
    }
} ())