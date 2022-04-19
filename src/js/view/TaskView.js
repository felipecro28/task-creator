class TaskView {
    constructor(elemento){
        this._elemento = elemento
    }

    showTask(object) {
        let list = JSON.parse(object)
        list = list._taskList
        console.log(list)

      this._elemento.innerHTML = list.map(elemento =>
        `
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" style="background-color: rgba(69, 152, 219, 0.479); margin: 10px 0;">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${elemento._tasknName}</h5>
            <small class="text-muted">${elemento._deadline} days left</small>
          </div>
          <p class="mb-1">${elemento._description}</p>
          <div class="d-flex w-100 justify-content-between">
          <small class="text-muted">${elemento._type}</small>
          <p>&#x26D4;</p>
          </div>
        </a>
        `
      )}
    }