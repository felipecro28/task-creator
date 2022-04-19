class UserController {
    constructor(){
        this._name = document.querySelector('#user-name')
        this._email = document.querySelector('#user-email')
    }

    addUser(){
        let newUser = new User(this._name.value, this._email.value)
        localStorage.setItem('newUser', JSON.stringify(newUser))
    }
}