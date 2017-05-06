 //测试作用域问题
 function buttonInit() {
     var result = new Array();
     for (var i = 1; i < 4; i++) {
         var b = document.getElementById("button" + i);
         console.log(i);
         //  b.addEventListener("click", function () {
         //      console.log(document.getElementById("button" + (i-1)));
         //  }, false);
         result[i] = function () {
             return i;
         }
         // console.log(result[i]);
     }
     return result;
 }
 console.log(buttonInit());


//  function createFunctions() {
//      var result = new Array();
//      for (var i = 0; i < 10; i++) {
//          result[i] = function (num) {
//              return function () {
//                  return num;
//              }
//          }(i);
//      }
//      return result;
//  }
///---------------------
 function createFunctions() {
     var result = new Array();
     for (var i = 0; i < 10; i++) {
         result[i] = function () {
             console.log(i);
             return i;
         };
     }
     return result;
 }
 console.log(createFunctions());
///-----------------
 function a(){
     var aa = 1;
     var bb = function(){
         console.log('闭包demo',aa);
     }
     return bb;
 }
 a()();


 //-------------------
var length = 10;
function fnn(){
    console.log('函数传参', this.length);
}
var objj = {
    length:5,
    method:function(fnn){
        fnn();
        arguments[0]();
    }
};
objj.method(fnn);
//node 输出
// 函数传参 undefined
// 函数传参 1

//windows 输出
// 函数传参 10
// 函数传参 1