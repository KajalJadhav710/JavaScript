//CallBack Anonomous Function in JavaScript..

function f1(f){
    console.log("f1");
    f();
    f();
}

f1(function() {
    console.log("Anonomous Function");
});


function add(a){
    console.log("Addition");
    a();
    a();
}
add(function(){
    console.log("Anonomous Addition");
});

// Method Second

function f1(){
    console.log("f1");
}
function f2(f){
    console.log("f2");
    f();
    f();
}
f2(f1);                    //CallBackFunction