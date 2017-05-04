if(typeof Object.baget !== 'function'){
    Object.create = function(o){
        var F = function(){};
        F.prototype = o;
        return new F;
    }
}