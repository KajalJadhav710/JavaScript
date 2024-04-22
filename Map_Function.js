//Apply map function on Array..
var Arr = [10,20,30,40,50]

//var newArray = [100,200,300,400,500];

var newArray = Arr.map(function(ele,i){
    var num = 10;
    var res = ele * 10;
    return res;

});
console.log(newArray);

