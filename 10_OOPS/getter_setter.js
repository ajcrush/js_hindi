class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(val){
        this._password = val
    }
}
const mohit = new User("mohit@mohit.ai","abc")
console.log(mohit.password);