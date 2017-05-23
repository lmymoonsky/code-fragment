// 尾调用：函数执行的的最后一步操作是调用另一个函数，并无其他任何操作，称为尾调用
// 作用：函数调用都会有调用记录，即为调用帧，保存调用位置和内部变量
// 尾调用优化：只保存内层函数的调用记录 这样将会大大节省内存

// 函数调用自身，称为递归。如果尾调用自身，就称为尾递归。

//计算阶层
function factorial(n, total){
  if(n === 1) return 1;
  return factorial(n-1, n*total);
}

factorial(5, 1); // 120

// 在 ES6 中 只要使用 尾递归 就不会发生内存溢出，相对节省内存


// 尾递归 改写
function tailFactorial(n, total){
  if(n === 1) return 1;
  return tailFactorial(n-1, total);
}

function factorial(m){
  return tailFactorial(m, 1);
}

factorial(5); //120