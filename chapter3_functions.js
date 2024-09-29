//! Chapter 3
// ! 1
console.log(parseInt('11e1'));
console.log(1e1);
console.log(parseInt(NaN));

// ! 2
var a = 1;
function f() {
 var a = 2;
 function n() {
 console.log(a);;
 }
 a=4;
 n();
}
f(); 

// ! Chapter  4 Functions

function abhi()
{
   console.log(this); // ? This should print undefined but an object is getting printed

}
abhi()


// Working with this
let obj1={
    abhi:function (){
        return this;
    }
}
console.log(obj1.abhi());  // ? When you return this inside a method of an objct then it will point to the object obj1.
console.log(typeof (obj1.abhi()));


// Working with this
function F() {
    function C() { 
    return this; // ? the normal function return undefined 
    } 
    return C();
   } 
   var o = new F();  
   console.log(o);

// ? The normal function will return undefined or using the vs code then it will return global object under node
// ? In the functional constructor if

// 


function C(){ 
    this.a = 1; //? you cannot print this a
    return false; 
   }
   console.log(typeof new C());


// Reverse the string

function reverse1 (str){
this.str=str;
    this.rev= function() {
        let str1="";
        for(let i=this.str.length-1;i>=0;--i)
        {
            str1+=this.str[i];
        }
        return str1;
    }
}

// Directly declaring the property under the string constructor.
String.prototype.rev=function (){
    
            let str1="";
            for(let i=this.length-1;i>=0;--i)
            {
                str1+=this[i];
            }
            console.log(str1);
        
    }
    
let oobj1=new reverse1("abhi")
console.log(oobj1.rev());
console.log();


let name2="abhi" 
name2.rev() // ? This works as we have define this method under the prototype of String.


// ! Chapter 5

// 
function Triangle(a,b,c)
{
this.a=a;
this.b=b;
this.c=c;

}
let shape={
    getP:function(){
        console.log(this.a+this.b+this.c); //? as we have used this means this refers to t here and t.a will give you the correct value
    }
}
Triangle.prototype=shape
Triangle.prototype.constructor=Triangle // ? we have to set this as it is lost when u set the prototype to other object.
let t=new Triangle(1,2,3)
console.log(t.constructor);
console.log(Triangle.prototype.constructor);
console.log(t.d);
console.log(shape.isPrototypeOf(t));
t.getP()