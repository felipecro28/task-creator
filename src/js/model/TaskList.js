class TaskList {
    constructor(){
        this._taskList = []
    }

    addTaskList(task){
        this._taskList.push(task)
        console.log(this._taskList)
    }

    static removeTask(event){
        let object = localStorage.getItem('taskList')
        let list = JSON.parse(object)
        list = list._taskList
        let index = 0
        let taskToRemove = event.srcElement.id
        list.map(task => task._tasknName == taskToRemove ? index = list.indexOf(task): true)
        let removedItem = list.splice(index, 1)
        let objeto = new Object
        objeto._taskList = [...list]
        localStorage.setItem('taskList', JSON.stringify(objeto))
        document.location.reload(true)

    }

}