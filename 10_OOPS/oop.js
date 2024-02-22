// const user ={
//     username:"Mohit",
//     loginCount :8,
//     signedIn :true,
//     getDatabase :function(){
//         // console.log("Connected to database");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
//     }
// }



// console.log(user.username);
// console.log(user.getDatabase());
// console.log(this);


// const promiseOne = new Promise()
// const date = new Date()
// console.log(date);

function user(username , loggingCount ,isLoggedIn){
    this.username = username
    this.loggingCount = loggingCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`welcome : ${this.username}`);
    }

    return this

}
const userOne =new user('mohit',12,true)
const userTwo =new user('chaiaurcode',11,false)
// console.log(userOne);
// console.log(userTwo);
// console.log(userTwo.greeting());
console.log(userOne.constructor);
