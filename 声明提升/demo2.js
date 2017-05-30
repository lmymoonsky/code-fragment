var foo = 1;
(function(){
  foo = 2;
  function foo(){

  }

  console.log(foo);

})();

console.log(foo);

// 2,1

//-----解析---
var foo;
foo = 1;
(function(){
  var foo;
  function foo(){}
  foo = 2;
  console.log(foo);
})();

console.log(foo);