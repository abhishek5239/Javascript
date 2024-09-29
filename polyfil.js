let a=[1,2,3,45,6]
let b= a.map((val,i)=>
    {
        return val+i;
    })


console.log(b);

Array.prototype.mapArray=function(fun)
{
    let arr=[]
    for(let i=0;i<this.length;++i)
    {
        arr.push(fun(this[i],i))
    }
    return arr
}
Array.prototype.filterArray=function(fun)
{
    let arr=[]
    for(let i=0;i<this.length;++i)
    {
        if(fun(this[i],i))
        {
            arr.push(this[i])
        }
    
    }
    return arr
}
Array.prototype.eachfor=function(fun)
{
    
    for(let i=0;i<this.length;++i)
    {
        fun(this[i])
    
    }
    
}
let z=a.mapArray((val,i)=>{
    return val+2
})
let abc=a.filterArray((val,i)=>{
    return val%2==0;
})
console.log(abc);    



a.eachfor((vari)=>{
    console.log(vari);
})
