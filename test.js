// !
var a=100
function ab()
{
    var a=200;
    return function()
    {
        a=600;
        console.log(a);
    }
    
}
let cb=ab();
a=500;
cb();

// !
function parent()
{
    var p1=200;
    function c1()
    {
        var cc1=500;
        function c2()
    {
        var cc2=100;
        console.log(cc2,cc1,p1);
    }
    }
    
    c1();
    // cc2();
}
parent()

function f(){}

console.log(f.length);


// !

function C(){ 
    this.a = 1;
    return {abhi:"dancing"}; 
   }
   console.log(typeof new C()); // this is an object
   let Cc=new C();
   console.log(Cc.a); // will give undefined
   console.log(Cc.abhi); // will print the right value

//    !
 cCC = [1, 2, [1, 2]];
 cCC.sort();
 let a2=cCC.join('--'); 
 console.log(a2); // "1--1,2--2"
 console.log(cCC); // [1,[1,2],2]
