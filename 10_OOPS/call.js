function setUsername(username){
    //COmplex DB Calls
    this.username = username
    // return this.username
}
function createUser(username ,email , password){
    // this.username = setUsername(username)
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);