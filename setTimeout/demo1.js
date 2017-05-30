for(var i = 0;i<10;i++){
  setTimeout(function(){
    console.log(i);
  },1000);
}

// 大约 1s 之后连续输出 10 个 10。因为没有块级作用域，可以把 var 改成 let，也可以给 setTimeout 包装一层 IIFE(立即调用函数表达式)。

for (var i = 1; i < 10; i++) {
  (function (j) {
    setTimeout(function(){
      console.log(j);
    }, 1000);
  })(i);
}