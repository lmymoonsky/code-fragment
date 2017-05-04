//函数传参 是按 值传递
//基本类型和引用类型都是按值传递，但是 引用类型是按照引用类型的方式访问

//----
function setNum(num){
    num += 1;
    return num;
}
var count = 10;
var res = setNum(count);
console.log(res); // 11
console.log(count); // 10,值并没有被改变

//-------
function setName(obj){
    obj.name = 'N';
    obj = new Object();
    obj.name = 'G';
    console.log('inner', obj.name); // 'G'
}
var per = new Object();
setName(per);
console.log('outer', per.name); //'N',如果是按照引用传递的，那么per 就会指向name值为 G 的新对象，但是结果打印出 ‘N’说明即便在函数内部修改了参数的值，原始的引用保持不变，实际上在函数内部新创建一个对象，这个变量引用属于函数内部的局部变量，会在函数之行结束后立即被销毁。

//-------
