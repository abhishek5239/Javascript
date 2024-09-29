
// !Variables in javascript

let a="abhishek"
console.log(a);
{
    let a="ashu"
}
console.log(a);

// ! premitive and non premitive data types

let b=true
let c=undefined
let d=BigInt(256)

// This is an object
let e=
{
"abhi":1,
"ashu":2
}
console.log(e.abhi);
console.log(e["abhi"]);

const obj={
    hello:"namste",
    bye:"tata"
}

obj["hello"]="namo namo"
console.log(obj.hello);
// this will provide an error
// obj={}
// console.log(obj);


// !  Function

let abhi="Abhishek";
pvalue(abhi);

function pvalue(name)
{
    console.log("my name is "+name);
    console.log(`my name is ${name}`);
}

const funName =(name)=>{
    console.log(`my new name is ${name}`);
}
funName(abhi)

// ! for in and for of loop
// ! foreach 

const obj1={
    abhi:"56",
    ashu:"40",
    niki:"30"
}
for(let i in obj1)
{
    console.log(obj1[i]);
}

let str="Abhishek"
for(let i of str)
{
    console.log(i);
}

for(let i=0;i<Object.keys(obj1).length;++i)
{
    console.log(Object.keys(obj1)[i]);
}

let arra=[1,100,101,102]
arra.forEach((num,index,array)=>{
    console.log(num);
    console.log(index);
    console.log(array);
})

// ! String

let str2="abhishek/bhadane/ashutosh"
const ab=str2.split("/")
console.log(ab);
console.log(ab[1]);


let abhi1="my name is abhishek"
let new1=abhi1.replace("name","name2")
console.log(new1);

// ! array 
let arr=[1,2,3,4]
delete arr[0]
console.log(arr);

let arrabhi=[45,1,55,3,2]
const comparison=(a,b)=>a-b
// only sort, sort the array alphabetically
arrabhi.sort(comparison)
console.log(arrabhi);

// ! Map filter reducer

// map

let arrmap=[34,22,1,4,5]
let newmap=arrmap.map((value,index)=>{
    return value+1;
})
console.log(newmap); 

// filter
let newmap1=arrmap.filter((currentvalue,currentindex,array)=>{
    return currentvalue%2==0;
})
console.log(newmap1);

// reducer

let newap2=arrmap.reduce((intialvalue,currentvalue,currentindex,array)=>{

})

// ! random number generator
let randa=Math.floor(Math.random()*10);
console.log(randa);