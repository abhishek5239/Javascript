
// ! 1. without catch
let getPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("resolved");
        resolve(55);
    },2000)
})

getPromise.then((value)=>{
    console.log("done and dusted");
    console.log(value);
})

// ! 2. with catch. we can use .then and .catch together. 
// ? then reject("error") or the resolve connects the .catch and .then 

let getPromise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("error occured");
        reject("error")
    },2000)
})
getPromise2.then().catch((e)=>{console.log(e);})

// ! 3. .then chaining

let getPromise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name:"abhi",age:21})
    },2000)
})

getPromise3.then((value)=>{
    console.log(value);
    return value.name; //?you have to return this to the other then
}).then((val)=>{
    console.log(val);
})

// ! 4. fetch. it return an promise which we can tackle using .then

fetch("https://jsonplaceholder.typicode.com")
.then((response)=>{
    return response.json()
})
.then((re)=>{
    console.log(re);
}).catch((e)=>{
    console.log(e); //? if the url is wrong then call will not go and .catch will get execute 
    //? also you can define your own message
})


// ! 5. using async and await
// ? but what if the api failse. so here explicityly we have to define the try catch block
async function fectFun()
{
    let res= await fetch("https://jsonplaceholder.typicode.com/posts")
    let response= await res.json() //? writing await here is also necessary
    console.log(response[0]);
}
fectFun() 

// ! 6. using try catch. so here explicitly u have mentioned this

async function fectFunerr()
{
    let res= await fetch("https://jsonplaceholder.typicode.com")
    try {
        let response= await res.json() //? writing await here is also necessary
    console.log(response[0]);
    } catch (error) {
        console.log("eror in try catch block"+ error);
    }
}
fectFunerr() 