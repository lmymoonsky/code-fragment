"use strict";

var a = 2;
let b =3;

console.log(this.a, this.b); // 2

// 浏览器环境中 this 指向 window, 而 var 声明的变量会被挂到 window 上， 而 let 神明的变量不会挂在 window 上。