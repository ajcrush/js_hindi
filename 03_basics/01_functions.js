

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

console.log(loginUserMessage("hitesh"))

console.log(loginUserMessage());
