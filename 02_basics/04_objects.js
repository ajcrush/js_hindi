// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "1234abc"
tinderUser.name = " Gaurav"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email :"fejwhuhj@gmail.com",
    fullName : {
        userFullName :{
            firstName : "Mohit",
            lastName : "sharma"
        }
    }
}

console.log(regularUser.fullName.userFullName);

const obj1 ={
    1:"a",2:"b"
}
const obj2 ={
    3:"c",4:"d"
}

// const obj3  = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users =[
    {
        id:1,
        email:"gfdhd@gmail.com"
    },
    {
        id:2,
        email:"gfdhd@gmail.com"
    }
]
// console.log(users[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course ={
    coursename: "js in hindi",
    price : 999 ,
    courseInstructor : "mohit"
}
const {courseInstructor : instructor} = course
console.log(instructor);

{
    name 
}