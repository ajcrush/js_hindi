const user ={
    username:"Mohit",
    price:999,

    wlcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
       // console.log(this);
    }

}

// user.wlcomeMessage()
// user.username = "Saurabh"
// user.wlcomeMessage()
// user.wlcomeMessage()
// console.log(this);

// function chai(){
//     let username="mohit"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Mohit"
//     console.log(this.username);
// }


const chai = () => {
    let username = "Mohit"
    console.log(this);
}
// chai()

//Explicit return
// const addTwo = (num1 ,num2) => {
//     return num1 + num2
// }

//implicit return
// const addTwo = (num1 , num2) => num1+num2
const addTwo = (num1 , num2) => (num1+num2)
console.log(addTwo(5,6));

const myArray = [2,3,7,8,5]
