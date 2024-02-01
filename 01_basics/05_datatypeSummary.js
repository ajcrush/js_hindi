// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);
const bigNumber = 2147387923789678789n
console.log(typeof bigNumber);
// It is dynamically typed

// Reference type (Non Primitive)

// Array , Objects , Functions

const heros = ["shaktiman" , "naagraj" , "doga"]
let obj= {
    name : "mohit", 
    age : 22
}
const myFunction =function(){
    console.log("Hello world");
}
console.log(typeof heros);