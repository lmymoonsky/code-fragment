//数组织间追加
var array1 = [12,"foo",{name:"Joe"},-1267];
var array2 = ['Dow',555,100];
Array.prototype.push.call(array1,array2);

//获取数组中最大值和最小值
var numbers = [5,456,120,-126];
var maxInNumbers = Math.max.call(Math,5,456,120,-126);
var maxInNumbers = Math.max.apply(Math,numbers);

//验证是否是数组
function isArray(obj){
    return Object.prototype.toString.call(obj) === '[object Array]';
}

//伪数组
Array.prototype.slice.call(document.getElementsByTagName('*'));

alert(a);
var a = 2;
function a(){
    alert(1);
}