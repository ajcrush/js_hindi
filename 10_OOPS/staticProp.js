class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }
    static createID(){
        return `123`
    }
}

const mohit = new User("Mohit")
// console.log(mohit.createID())
console.log(User.createID());

class Teacher extends User{
    constructor(email,username){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe()
console.log(Teacher.createID());