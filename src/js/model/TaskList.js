class TaskList {
    constructor(){
        this._taskList = []
    }

    addTaskList(task){
        this._taskList.push(task)
        console.log(this._taskList)
    }

}