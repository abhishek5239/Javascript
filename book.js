// ! 1.  The obj2 inherits from obj1 and obj1 sets as prototype
let obj1={
    type1:"Animal",
    sound:  function () {
        console.log("this is sound");
        console.log("Hi");
    }
}
let obj2=Object.create(obj1)
obj2.bark="baw baw"

console.log(obj2.type1);
console.log(obj1.sound());


// ! 2. Different ways of adding a function
function fun()
{}

fun2 =()=>{
    console.log("fun2");
}
console.log(fun2());

// ! 3. STRING TO NUMBER
let a="100"
console.log(typeof a); //string 
console.log(typeof (a*1)); //number

// ! 4. Number to string
let ab=245
console.log(typeof ab);
console.log(typeof (""+ab));

let abc='1s';
console.log(abc++);


// ! 5. Lexical Scope


function outer() {
    var a = 1;

    function inner() {
        var b = 2;
        console.log(a); // 1
        console.log(b); // 2
    }

    inner();
    // console.log(b); // ReferenceError: b is not defined
}

outer();

// ! 6. clouser

let zzz=400;
function z()
{
    let a=100;
    function x()
    {
        let b=200;
        function y()
        {
            console.log("clouser: ",a,b,zzz);
        }
        y();
    }
    x();
}
z();

let aaa=y();
console.log("",aaa);


// ! 7. clouser, won't work
function c1()
{
    let abcd=300;
    c2();
}
function c2()
{
    let ac=400;
    // console.log("clouser 2 ",abcd,ac);  //? this won't work
    
}
c1();

// ! 8. function and their property

function f(){}

console.log(f.length);
console.log(typeof f.prototype); // it gives object and also we can assign value to that object
f.prototype={abhi:"dancing"}
console.log(f.prototype.abhi); // u can assign the value to that object


// ! 9.  Prototypes

let proObj={
    abhi:"dancing",
    __proto__:{sharau:"singing"}
}
proObj.prototype={"ashu":"singing"}
function ProObj1() {
    this.niki = "laughing";
}

let temp={
    rohan:"ss"
}
Object.setPrototypeOf(ProObj1,temp)

let tempval=new ProObj1();
console.log(tempval.niki);
// console.log(tempval.prototype.niki);
console.log(proObj.ashu);


console.log(proObj);


// ! 10. declaring the prototype globally

Object.prototype.name={abhi:"ashu"}
let obj={}
console.log(obj.name.abhi);


// ! 11. here instance cannot access the property of prototype.

function ppfun() {
    this.a = "aa";
}

ppfun.prototype.name = { abhi: "ashu" };

let ans2 = new pfun();
// console.log(ans2.prototype.name.abhi); //! this won't work
console.log(ans2.name.abhi); //! this will work



// !12.  which will work and which cant


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


// ! 13. GENERIC OBJECT


console.log(Object.prototype);
Object.prototype={aaa:"abcdef"} //! This won't work
Object.prototype.a="klmn" //! This will work
console.log(Object.prototype);