// ! 1.CALL

let obj1={
    name:"abhi",
    age:22,
    display:function (){
        console.log(`my name is ${this.name} and my age is ${this.age}` );
    },
    displayWithArgs:function (city){
        console.log(`my name is ${this.name} and my age is ${this.age} and belong to ${city}` );
    }
}

let obj2={
    name:"ashu",
    age:10,
    
}
// ? call method which helps you to assign the this to other instance so that you can call the same function with
// ? multiple arguments
// * here obj2 means we gave the reference that this should be set to obj2
obj1.display.call(obj2)

// !?also we can pass the args
obj1.displayWithArgs.call(obj2,"pune")

// ! 2. APPLY . in this only the passing of args is in array that's it rest everything is same

let obj3={
    name:"abhi",
    age:22,
    
    displayWithArgs:function (city,state){
        console.log(`my name is ${this.name} and my age is ${this.age} and belong to ${city} from ${state}` );
    }
}
let obj4={
    name:"ashu",
    age:10,
    
}
obj3.displayWithArgs.apply(obj4,["pune","maharashtra"])


// ! 3. bind  In this we pass the bind to other variable and that variable could call that function

let obj5={
    name:"abhi",
    age:22,
    
    displayWithArgs:function (city,state){
        console.log(`my name is ${this.name} and my age is ${this.age} and belong to ${city} from ${state}` );
    }
}
let obj6={
    name:"ashu",
    age:10,
    
}

let bindVar=obj5.displayWithArgs.bind(obj6,"pune","maharashtra")
bindVar("pune","maharashtra")


// ! 4. also we can set the function outside the object and then call it for any object

let obj7={
    name:"abhi",
    age:22,
    
 
    }
    function disp (city,state){
        console.log(`my name is ${this.name} and my age is ${this.age} and belong to ${city} from ${state}` );
}
let obj8={
    name:"ashu",
    age:10,
    
}

disp.call(obj8,"indore","MP")
let aaaa=disp.bind(obj8)
aaaa("indore","MP")



let ca=30;
function constt(){
    let za=20;
    return function under()
    {
        let ba=100
        return (ba+za+ca)
    }
    
}


let fkfj=new constt
console.log(fkfj());


