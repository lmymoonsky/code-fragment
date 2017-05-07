//---------------
// 考察函数是特殊的对象，函数的传参是按照值传递，但是引用类型参数是按照引用类型方式使用
var a = 1;
var obj = {
    b: 2
};
var fn = function () {};

fn.c = 3; //函数也是特殊的对象，因此此处没有错

function test(x, y, z) {
    x = 4;
    y.b = 5;
    z.c = 6;
    console.log(z);
    return z;
}

test(a, obj, fn); // 返回 { [Function: fn] c: 6 }
console.log(a + obj.b + fn.c); // a=1 obj.b = 5 fn.c=6 ，输出 12


//----------------
var func = function a2() {
    console.log(1, typeof a2);
}
func(); // a2 全局函数  
console.log(2, typeof a2); //未定义  所以输出  undefined, typeof undefined 为 undefined

// 结果
// 1 'function'
// 2 'undefined'

//------------------
var arr = [1, 1, 2, 4, 3, 2, 'a', 5, 6, 34, 2, 'c', 21, 12, 566, 45, 45, 'b', 21, 2, 1];

function compare(value1, value2) {
    // if (value1 < value2) {
    //     return 1;
    // } else if (value1 > value2) {
    //     return -1;
    // } else {
    //     return 0;
    // }
    return value2 - value1;
}
arr.sort(compare)
//sort() 不传参数 比较的是 字符串 即使是数值类型 也会调用 toString 转成 字符串你进行比较 ，因此传个比较函数作为参数个可靠
console.log('arr', arr);

//--------------------- 
// js 运行机制--
// function test739(){
//     var a = 1;
//     setTimeout(function(){
//         console.log(a);
//         a = 3;
//     },3000);
//     a = 2;
//     setTimeout(function(){
//         console.log(a);
//         a = 4;
//     },1000);
// }
// test739();
// console.log(0);
//输出 0 2 4 --


//---------------- 函数传参
var length = 10;

function fnn(a) {
    console.log('函数传参', this.length);
    // console.log('函数传参', this);
}
var objj = {
    length: 5,
    method: function (fnn, a) {
        fnn();
        arguments[0]();
    }
};
objj.method(fnn, 1);
//node 输出
// 函数传参 undefined
// 函数传参 1

//windows 输出
// 函数传参 10
// 函数传参 1

//解释 arguments[0] 指向了 arguments 对象 相当于 {0：fnn},所以他的 length 即为 1；
//解释 fnn(); 定义时候 在全局定义，此处调用相当于 window.fnn()调用时 this 只指向调用他的对象


//------------------
var x = 1,
    y = z = 0;

function addb(n) {
    return n = n + 1;
}
y = addb(2);
console.log('y', y);

function addb(n) {
    return n = n + 3;
}
z = addb(y);
console.log('z', z);
//输出
// y 5
// z 8



//---------------------
var myObject = {
    num: 2,
    edit: function () {
        this.num = 3;
        (function () {
            console.log('myObject', this.num);
            this.num = 4;
        })();
        console.log('myObject', this.num);
    }
};
myObject.edit();
// 输出
// myObject undefined
// myObject 3


//-------------------
function bd() {
    var i = 0;
    for (i = 0; i++ < 3;) {
        setTimeout(function () {
            return function () {
                console.log('i',i)
            }();
        }, 0);
    }
    console.log('执行没执行啊');
}
bd();

// 输出
// 执行没执行啊
// i 4
// i 4
// i 4


//--------------------
//考察变量定义提升 this指针指向 运算符优先级 原型 继承 全局变量污染 对象属性以及原型属性优先级等等
//函数声明  和  函数表达式 这两个此处存疑
// function Foo(){
//     getName = function(){
//         console.log('Foo',1);
//     };
//     return this;
// }
// Foo.getName = function(){
//     console.log('Foo',2);
// };
// Foo.prototype.getName = function(){
//     console.log('Foo',3);
// };
// var getName = 0;
// var getName = function (){
//     console.log('Foo',4);
// };
function getName(){
console.log('Foo',5);
};

// Foo.getName();
getName();
// Foo().getName();
// // getName();
// new Foo.getName();