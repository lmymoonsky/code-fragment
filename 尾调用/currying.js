// 函数柯里化 将多参函数转化成单参函数即为函数柯里化

function currying(fn, n){
  return function(m){
    return fn.call(this, m, n);
  }
}

function tailFactorial(n, total){
  if(n === 1) return 1;
  return tailFactorial(n-1, n*total);
}

const factorial = currying(tailFactorial, 1)

factorial(5); //120


//使用 ES6 的默认值 改写,采用ES6的函数默认值
function factorial(n, total = 1){
  if(n === 1) return 1;
  return factorial(n-1, n*total);
}

factorial(5); //120