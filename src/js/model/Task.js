class Task {
    constructor (taskName, deadline, description ,type){
        this._tasknName = taskName
        this._deadline = deadline
        this._description = description
        this._type = type
    }

    get taskName(){
        return this._taskName
    }

    get deadline(){
        return new Date(this._deadline.getTime())
    }

    get type(){
        return this._type
    }
}