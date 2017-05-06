//js 中的循环汇总
//一下面的数据为例

var demoStr = 'bacdefg';
var demoArr = ['Javascript', 'Gulp', 'CSS3', 'Grunt', 'jQuery', 'angular'];
var demoObj = {
    aaa: 'Javascript',
    bbb: 'Gulp',
    ccc: 'CSS3',
    ddd: 'Grunt',
    eee: 'jQuery',
    fff: 'angular'
};

//-----------
//for 循环 可以用来循环 数组 和 字符串
(function(){
    for(var i = 0,len = demoStr.length;i<len;i++){
        if(i == 2){
            // return; //跳出循环，并且函数执行被终止，
            // break; //循环被终止，但函数继续执行
            continue; //终止当前的循环，进行下一次循环
        }
        console.log('demoStr['+ i +']:' + demoStr[i]);
    }
    console.log('for 循环结束');
})();

// for 循环需要注意的点:
// 1、i 在循环结束后仍存在作用于当中，所以为了不影响作用域中的其他变量，所以，用自执行的方式将其隔离，如上所示；
// 2、for(var i = 0;i<demoArr.length;i++){} 这种写法每次都要计算 数组的长度，效率较低，因此可以像上面的方式书写，也可以在循环之外声明变量：
// var i= 0;
// var len = demoArr.length;
// for(;i<len;i++){};

// 跳出循环的方式有如下几种:
// return 函数执行被终止
// break 循环被终止
// continue 循环被跳过


//----------
// for in 循环
// for(var item in arr|obj){} 循环 用于遍历数组  和 对象

// 遍历数组时 item 为索引下标 arr表示当前索引值对应的元素 arr[item] 
// 遍历对象时 item 表示 key 值 arr 表示obj值对应的 value 值 obj[item]

(function(){
    for(var i in demoArr){
        if(i == 2){
            // return; // 函数执行被终止
            // break;  // 循环被终止
            continue;  // 循环被跳过
        }
        console.log('demoArr['+ i +']:' + demoArr[i]);
    }
    console.log('for in 循环终止');
})();

// 关于for in，注意点 与 for 循环的注意点一致


//-------------
// forEach
demoArr.forEach(function(val, index){
    if (val == 'CSS3') {
        return;  // 循环被跳过
        // break;   // 报错
        // continue;// 报错
    };
    console.log('forEach', val, index);
});

// 具体有以下需要注意的地方

// 回调函数中有2个参数，分别表示值和索引，这一点与jQuery中的$.each相反
// forEach无法遍历对象
// forEach无法在IE中使用，firefox和chrome实现了该方法
// forEach无法使用break，continue跳出循环，使用return时，效果和在for循环中使用continue一致
// 最重要的一点，可以添加第二参数，为一个数组，而且回调函数中的this会指向这个数组。而如果没有第二参数，则this会指向window。

var newArr = [];
demoArr.forEach(function(val, index){
    this.push(val); // 这里的this指向newArr
},newArr);

console.log('newArr', newArr);



//------------
// $.each() 
// $.each(demoArr|demoObj, function(e,ele){}) 可以用来遍历数组和对象，其中e表示索引值或者key值，ele表示value值
$.each(demoArr, function(e, ele) {
    console.log(e, ele);
});
// 输出为

// 0 "Javascript"
// 1 "Gulp"
// 2 "CSS3"
// 3 "Grunt"
// 4 "jQuery"
// 5 "angular"

// 这里有很多需要注意的地方

// 使用return 或者return true为跳过一次循环，继续执行后面的循环
// 使用return false为终止循环的执行，但是并不终止函数执行
// 无法使用break与continue来跳过循环
// 循环中this值输出类似如下

console.log(this);
//String {0: "C", 1: "S", 2: "S", 3: "3", length: 4, [[PrimitiveValue]]: "CSS3"}

console.log(this == ele);
// true
// 关于上面的this值，遍历一下
$.each(this, function(e, ele) {
    console.log(e, ele);
})

// 0 c
// 1 s
// 2 s
// 4 3
// 为什么length 和 [[PrimitiveValue]]没有遍历出来？突然灵光一动，在《javascript高级编程》中找到了答案，大概意思就是javascript的内部属性中，将对象数据属性中的Enumerable设置为了false
// 查看length的内部属性
console.log(Object.getOwnPropertyDescriptor(this, 'length'));
// Object {value: 4, writable: false, enumerable: false, configurable: false}
// $.each 中的 $(this) 与this有所不同，不过遍历结果却是一样，你可以在测试代码中打印出来看看


//---------------
// $(selector).each 专门用来遍历DOMList

$('.list li').each(function(i, ele){
    console.log(i, ele);
    // console.log(this == ele); // true
    $(this).html(i);
    if ($(this).attr('data-item') == 'do') {
        $(this).html('data-item: do');
    };
});

// i: 序列值 
// ele: 当前被遍历的DOM元素
// this 当前被遍历的DOM元素，不能调用jQuery方法
// $(this) == $(ele) 当前被遍历元素的jquery对象，可以调用jquery的方法进行dom操作


//-------------------
//将 伪数组转成数组
var domlist = document.getElementsByTagName('div');
var res = [].slice.call(domlist);
// Array.prototype.slice.call(arguments)

//补充： ()(), !function() {}(), +function() {}() 三种函数自执行的方式