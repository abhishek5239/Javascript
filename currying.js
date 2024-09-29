// ! 1. currying

function a(x)
{
    return function b(y)
    {
        return function c(z)
        {
            return (x+y+z)
        }
    }
}

let val=a(3)(2)(10)
console.log(val);