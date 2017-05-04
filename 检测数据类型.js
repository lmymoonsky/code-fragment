// typeof 可用来检测基本类型，但是对引用类型用处不大
var s = 'nanana';
var n = 123;
var o = new Object();
var oo = null;
var u;
var b = true;
var uu = undefined;
var arr = [1,2];
var reg = /^\d*$/g;

console.log(typeof s);
console.log(typeof n);
console.log(typeof o);
console.log(typeof oo);
console.log(typeof u);
console.log(typeof b);
console.log(typeof uu);
console.log(typeof arr);
console.log(typeof reg);

//结果
// string
// number
// object
// object
// undefined
// boolean
// undefined
// object
// object

//---
//用 instanceof 检测引用类型，所有引用类型的值都是 Object 的实例。当用其检测基本类型时候，都返回 false 因为基本类型不是对象
console.log(o instanceof Object); //变量 o 是 Object么？
console.log(oo instanceof Object); //变量 oo 是 Object么？
console.log(arr instanceof Object);
console.log(arr instanceof Array); //变量 arr 是 Array 么？
console.log(reg instanceof RegExp);
console.log(reg instanceof Array);

//结果
// true
// false
// true
// true
// true
// false


