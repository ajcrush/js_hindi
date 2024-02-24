const User = {
    _email: 'chai@chai.com',
    _password:'ABC',

    get email(){
        return this._email.toUpperCase()
    },

    set email(val){
        this._email = val
    }
}

const tea = Object.create(User)
console.log(tea.email);