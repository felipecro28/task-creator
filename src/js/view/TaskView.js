class TaskView {
    constructor(elemento){
        this._elemento = elemento
    }

    static addedTask(div){
        
      div.innerHTML = `
        <div class="alert alert-info" role="alert">
        Task successfully added!
      </div>
      `
      setTimeout(() => {
        return div.innerHTML = ''
      }, 1500);
    }

    showTask(object) {
        let list = JSON.parse(object)
        console.log(list)
        list = list._taskList
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
          <p id="${elemento._tasknName}" onclick="TaskList.removeTask(event)">&#x26D4;</p>
          </div>
        </a>
        `
      )}
    }