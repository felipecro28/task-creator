class UserController {
    constructor(){
        this._name = document.querySelector('#user-name').value
        this._email = document.querySelector('#user-email').value
    }

    addUser(){
        let newUser = new User(this._name, this._email)
        localStorage.setItem('newUser', JSON.stringify(newUser))
    }
}