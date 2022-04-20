# TASK CREATOR APPLICATION
This is a fake task creator application made with HTML, CSS (BOOTSTRAP) AND JAVASCRIPT

You can see the application running on [this link](https://felipecro28.github.io/task-creator/).
Or, in case the link above break, you can also acess the aplication by the direct link below:
https://felipecro28.github.io/task-creator/

The project follows the MVC architeture and, for design it, were created users, tasks and lists classes and instances, each one responsible just for create, controll, show or hide.

As example, we can see how a class method was used to show a task on our task menu.

```
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
```

