let obj1={
    a:"abhi",
    __proto__:{b:"ashu"}
}

console.log(obj1.__proto__.b);
console.log(obj1.b);
// console.log(obj1.prototype.b);//! this wont work


function obj2()
{

}

let var1=new obj2()
obj2.prototype.pro={a:"aa"}
console.log(var1.pro.a); //give the same value aa



// 
function obj3()
{

}
obj3.prototype={a:"aa"}
let var2=new obj3()

console.log(var2.a);//give the same value
// console.log(var2.prototype.a); //! this will not work


// // Define a constructor function
// function Obj2(name) {
//     // Constructor logic
//     this.name = name; // Instance-specific property
// }

// // Initialize prototype with properties and methods
// Obj2.prototype.type = "Object Type"; // Shared property
// Obj2.prototype.sayHello = function() { // Shared method
//     return "Hello, my name is " + this.name;
// };

// // Create instances of Obj2
// let var1 = new Obj2("Alice");
// let var2 = new Obj2("Bob");

// // Access prototype properties and methods
// console.log(var1.type); // Output: "Object Type"
// console.log(var1.sayHello()); // Output: "Hello, my name is Alice"

// console.log(var2.type); // Output: "Object Type"
// console.log(var2.sayHello()); // Output: "Hello, my name is Bob"



