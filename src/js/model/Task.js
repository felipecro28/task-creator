class Task {
    constructor (taskName, deadline, type){
        this._tasknName = taskName
        this._deadline = new Date (deadline)
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