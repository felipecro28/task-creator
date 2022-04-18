class User {
    constructor(name, email){
        this._name = name
        this._email = email
    }

    get name (){
        return this._name
    }

    get email (){
        return this._email
    }

    set name (name){
        return this._name = name
    }

    set email (email){
        return this._email = email
    }
}