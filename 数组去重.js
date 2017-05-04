//数组去重 var arrA = ['a','b','c','a','c',1,1,4,2,2,5,4,7,8,3,7,1,9];
var arrA = ['a','b','c','a','c',1,1,4,2,2,5,4,7,8,3,7,1,9];

function unique(arr) {
    var newArr = [];
    for(var i = 0,len = arr.length;i<len;i++){
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i]);
        }
    }
    // $.each(arr, function (e, i) {
    //     if (newArr.indexOf(e) == -1) {
    //         newArr.push(e);
    //     }
    // });
    console.log(newArr);
    return newArr;
}

unique(arrA);