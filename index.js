console.log(document.body);
let a=document.body;
console.log(typeof a);
Array.from(a)
console.log(typeof a);

console.log(document.body.firstChild);
console.log(document.body.childNodes);
console.log(typeof document.body.childNodes);
let b=document.body.childNodes;
// !this wont work as it is an object and not an array
// let bb=b.map((value)=>{
//     console.log(value);
// })
// console.log(b[0]);
let c=Array.from(b)
console.log(typeof c);
console.log(c[0]);
let cc=c.map((value)=>{
    console.log(value);
})
console.warn("new new new");

// !
console.log(document.body.firstElementChild);
let abb=document.body.firstElementChild;
console.log(abb.nextElementSibling);


let ddiv=document.getElementsByClassName("class1")
let ddiv1=document.getElementById("id1")
console.log(ddiv1);

console.warn("new new new");

// ! acess the value inside the element
console.log( document.getElementById("id1").innerHTML);
console.log(document.getElementById("head").innerHTML);
console.log(document.getElementById("head").outerHTML);
console.log(document.getElementById("id1").firstChild.nodeValue);

// ! getting all the text for that all the element
console.log(document.getElementById("id1").textContent);

// ! insert an element also we have append,prepend and replaaceWith
let inser=document.getElementById("id1")
let div=document.createElement("div")
div.innerHTML="<h1>HI</h1>"

inser.appendChild(div)
console.log(inser);

inser.append("<<div> <h1>Append</h1>>")