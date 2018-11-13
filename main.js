// https://tproger.ru/translations/frontend-testing-2/
var arr = [1,2,3,4,5];
console.log('foreach');
arrayFuncModule.foreach(arr,function(a,i){ console.log('a['+i+']='+a)});

console.log('map');
var arrMap = arrayFuncModule.map(arr,function(arrI, i){return arrI*i});
arrayFuncModule.foreach(arrMap,function(a){ console.log(a)});

console.log('take');
arrMap = arrayFuncModule.take(arr,3);
arrayFuncModule.foreach(arrMap,function(a){ console.log(a)});

console.log('skip');
arrMap = arrayFuncModule.skip(arr,3);
arrayFuncModule.foreach(arrMap,function(a){ console.log(a)});
