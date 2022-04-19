class TaskController{
    constructor(){
        this._tasknName = document.querySelector('#formGroupExampleInput')
        this._deadline = document.querySelector('#formGroupExampleInput2')
        this._description = document.querySelector('#formGroupExampleInput3')
        this._type = document.querySelector('#selectType')
        this._taskList = new TaskList()
    }

    addTask(event){
        event.preventDefault()
        let task = new Task(
            this._tasknName.value,
            dateToDaysLeft(this._deadline.value),
            this._description.value,
            this._type.value,)
        this._taskList.addTaskList(task)
        localStorage.setItem('taskList', JSON.stringify(this._taskList))
        this.cleanTaskForm()
    }

    cleanTaskForm(){
        this._tasknName.value = ''
        this._deadline.value = ''
        this._description.value = ''
        this._type.value = ''
    }
}