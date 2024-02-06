

function sayMyName(){
    console.log("M");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,7)
// console.log("Result :",result);

function loginUserMessage(username="Sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))

// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600));

const user ={
    username:"Mohit",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username:"Sam",
    price:99
})

const myNewArray =[100,200,300,400,55]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));