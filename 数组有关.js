var aa = ['1','2','3'];

aa.map(parseInt); // [1,NaN,NaN]


// parseInt(string, radix);

// string:要转化的字符串，必填
// radix:将字符串按照相应的进制数进行转换，不填则默认按照10进制，0则按照字符串基数本身，范围在[2-36]之间，否则返回NaN

// 注意：转化过程如果字符串的第一个字符不能转化成数字则返回NaN。

// map(value,index,array1);

// value:当前值
// index:当前对象的索引
// array1:原数组

// 有返回值，返回新组转的数组，不能改变原数组

// aa.map(parseInt); 中循环中的每一项传入parseInt3个参数 value index array

// var parseInt = function(string,radix){
//   return string + '-' +radix;
// }
// aa.map(parseInt); // ["1-0", "2-1", "3-2"] 不能大于radix

// 相当于:
// parseInt('1',0); // 返回数值 1
// parseInt('2',1); // radix 取值 空、0、[2-36],1 不在此范围内 ，所以返回 NaN
// parseInt('3',2); // radix 大于 string ，所以返回 NaN
