OrderId = [101,102,103,104,105];

var filterId = OrderId.filter(function(e,i){
    return e > 103;
});

// filterId = [e];
console.log(filterId);

//Task

var Prod = [
    {
        PName : "Apple",
        Bname : "Appale",
        price : 78500
    },
    {
        PName : "Rose",
        Bname : "Roses",
        price : 76546
    },
    {
        PName : "Red",
        Bname : "Radish",
        price : 87644
    }
];

var filterdData = Prod.filter(function(ele){
    return ele.Bname == "Roses";
});

console.log(filterdData);


