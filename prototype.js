function f()
{}
f.prototype.name="f_prototype"

function f2()
{}
f2.prototype=f.prototype;

// ! As we have assign the prototype of f to f2 then the constructor of f2 is also shifted to f which 
// ! wrong so we will resign it.
console.log(f2.prototype.constructor);



// ! ressign
f2.prototype.constructor=f2;


f2.prototype.caste="hindu"
let f2_var=new f2()
let f1_var=new f()
console.log("### "+ f2_var.constructor); //? this should point to the right constructor which is f2


console.log(f2.prototype);

//!YOU CANNOT CHECK DIRECTLY ON THE FUNCTION. IT CHECK ONLY PROPERTY INSIDE THE FUNCTION
console.log(f2.caste); 

console.log(f2_var.caste); //! This will work

f.prototype.f_pro="f ka prototype" //? works

console.log(f2.prototype);


// ! This is the main issue.
// ! key can get reassign as both the function we have assign the same prototype
f2.prototype.name="f2 prototype"
