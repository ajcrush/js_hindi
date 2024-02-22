//consuming promises
// fetch('http://something.com').then().catch().finally()

const PromiseOne = new Promise(function(resolve , reject){
    // Do an async task
    //DB calls , cryptography , network related
    setTimeout(() => {
        console.log("Asynch task is complete");
        resolve()
    }, 1000);
})

PromiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    },1000)
}).then(()=>{
    console.log("Asynch 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Chai",email:"example@example.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"mohit",password:"123"})
        }else{
            reject('Error Something went wrong')
        }
    }, 1000);
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log("The promise is either resolved or rejected"))