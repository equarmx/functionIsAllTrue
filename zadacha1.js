function isAllTrue(source,filterFn){
    if(source==0){
        throw new Error('Пустой массив');
    }
    var result=true;
    for(var i=0;i<source.length;i++){
        if(filterFn(source[i])!=true){
            result=false;
        }
    }
    return result;
}

function isNumber(val) {
    return typeof val === 'number';
}

try{
    var allNumbers = [1, 2, 4, 5, 6, 7, 8];
    console.log(isAllTrue(allNumbers, isNumber)); //вернет true
} catch(e){
    console.error(e.message);
}
try{
    var someNumbers = [1, 2, 'привет', 4, 5, 'leoskl', 6, 7, 8];
    console.log(isAllTrue(someNumbers, isNumber)); //вернет false
} catch(e){
    console.error(e.message);
}
try{
    var noNumbers = ['это', 'массив', 'без', 'чисел'];
    console.log(isAllTrue(noNumbers, isNumber)); //вернет false
} catch(e){
    console.error(e.message);
}






