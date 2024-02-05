// Singleton
// signleton object will becaame when uh declare it from constructor else not 
// Object.create()

// object literals
const mySym = Symbol("key1")
const jsUser = {
    name : "Mohit",
    "full name" : "mohit kumar sharma",
    [mySym] : "mykey1",
    age : 21,
    location  : "bhagalpur",
    email : "mohitanand8987@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]

}

// console.log(jsUser.name)
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email ="mohit@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "mohit@microsoft.com"
// console.log(jsUser);
jsUser.greeting = function(){
    console.log("Welcome JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Welcome JS user , ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());








