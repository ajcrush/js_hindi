let myName = "Mohit     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

console.log(myName.trueLength());
"ghjkfyyuyu7  ".trueLength()

let myHeros = ['Thor','Spider_man']

let heroPower = {
    Thor:"haammer",
    Spider_man:"sling",
    getSpiderPower : function(){
        console.log(`spidy power is ${this.Spider_man}`);
    }
}

Object.prototype.mohit = function(){
    console.log("Mohit is present in all objects");
}
// myHeros.mohit()
// heroPower.mohit()
Array.prototype.heyMohit = function(){
    console.log(`Mohit says hello`);
}
// myHeros.heyMohit()
// heroPower.heyMohit()


//Inheritance
const User ={
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo:true
}

const TeachingSupport ={
    isAvailable : false
}
const TASupport ={
    makeAssignment: 'JS Assignment',
    fullTime:true,
    // __proto__:TeachingSupport
}

// Teacher.__proto__ = User

// console.log(TASupport.isAvailable)


//Modern Syntax

Object.setPrototypeOf(TeachingSupport , Teacher)
// console.log(TeachingSupport.makeVideo)