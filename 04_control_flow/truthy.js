const userEmail = "h@mohit.ai"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}
/*
// Falsy value

false , 0 , -0 , BigInt 0n , null , "" , null , undefined , NaN

//Truthy value
all other than upper is truthy value

"0" , 'false' , " " , [] ,{} , function(){}
*/

const arr =[]
if(arr.length == 0){
    console.log("Array is empty");
}
const emptyObj = {}
if(Object.keys(emptyObj).length == 0){
    console.log("Empty Object");
}

// false == 0
// 0 == ""
// "" == true all are true

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? undefined
val1 = null ?? undefined ?? 5
console.log(val1);

const iceTeaPrice  = 100
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");