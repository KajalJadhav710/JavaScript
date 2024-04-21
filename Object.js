var product={
    Pname:"Phone",
    Bname : "Samsung",
    Price : 75000
}
console.log(product);

var Color ={
    Cname : "Red",
    Cprice : 250
}
console.log(Color);

//How to access Specific Property Value From the object 
 console.log(product.Bname);
 console.log(Color.Cname);

 // Insert /Add new Property in Existing object

  product.Bname="Apple";
  console.log(product.Bname);
  

//we can updating value of the object/property in existing object......

Color.Cprice = 85000;
console.log(Color.Cprice);

//How to  delete the property of existing object...

delete product.Bname;
console.log(product);

//Nested Object (Object inside Object)

var User1 = {
    name : "Kajal Jadhav",
    Email : "kajaljadhav0710@gamil.com",
    Id : 104,
    address : {
           City : "Vita",
           State : "Maharashtra",
           Pin : 415324
    }
    
}
console.log(User1.address);
console.log(User1.address.City);
console.log(User1.address.State);

//how to update object....

User1.address.Pin = 415311;
console.log(User1.address.Pin);

User1.address.Email = "kajaljadhava10@gmail.com";
console.log(User1.Email);



var Emp = {
    id : 1,
    Name : "Sujay ",
    Eduction : {
        Collage : "DY Patil Institute of technology Pune",
        City : "Pune",
        Year : "Last Year"
    }
}

console.log(Emp);
console.log(Emp.Eduction);

// 

var Products = {
    Product_Name : "Laptop",
    Price : 10000,
    Totalprice : function(){
        console.log(12000*7);
    }
};

Products.Totalprice();
Products.Totalprice(10);