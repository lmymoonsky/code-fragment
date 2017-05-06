//函数 定义 有两种 一个函数声明（可提升），另一个是函数表达式

// arguments.callee() //指向当前执行的函数
function factorial1(num){
    if(num <= 1){
        return 1;
    }else {
        return num*arguments.callee(num-1);
    }
}
// ==>
var factorial2 = (function f(num){
    if(num <= 1){
        return 1;
    }else {
        return num*f(num-1);
    }
});


//----------------
//闭包
function bb(prototypeName){
    return function(obj1,obj2){
        var val1 = obj1[prototypeName];
        var val2 = obj2[prototypeName];
        if(val1 < val2){
            return -1;
        }else if(val1 > val2){
            return 1;
        }else{
            return 0;
        }
    }
}