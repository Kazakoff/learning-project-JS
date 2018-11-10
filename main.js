// https://tproger.ru/translations/frontend-testing-2/
const arrayFunctions = require('ArrayFunction')
var arr = [1,2,3,4,5];
/*console.log('foreach');
arrayFunctions.foreach(arr,function(a,i){ console.log('a['+i+']='+a)});

arrayFunctions.forEach(resultArray,function(arrItm, i, array){array[i] += i})
*/
function reduce(a, callback, initialValue ){
    var accumulate = initialValue ? initialValue : 0;
    var length = a.length;
    for (i = 0; i < length; i++) {
        accumulate = callback(accumulate, a[i], i, a);
    }
    return accumulate;
}
const arr = [1,2,3];
 var c = reduce(arr,function(faktorial, arrItm){return faktorial *= arrItm},1)