//Using a splice u can modify the Existing array insert new element
//update existing element
//delete element


var A = ["Sarvesha", "Jay","Swara","Manisha","Rajendra","Pranav"];

var B = A.splice(1,2);
console.log(B);
console.log(A);

var C = A.splice(1);
console.log(C);
console.log(A);

var value = A.splice(1,3);
A.push("Sarvesha");
console.log(A);

var D = A.splice(1,2);
A.push(10,20);
console.log(A);

//update

var E = A.splice(6,1,"Jadhav");

console.log(A);

var X =  A.splice(7,1,10);
console.log(A);