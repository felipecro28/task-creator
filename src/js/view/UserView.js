class UserView{
    constructor(element){
        this._element = element
        this._menuDiv = document.querySelector('.menu-div')
    }

    viewNewUser(user){
        user = localStorage.getItem('newUser')
        user = JSON.parse(user)
        let h2 = document.createElement("h2")
        h2.innerText = `Hi, ${user._name}!`
        document.querySelector('.text-task').prepend(h2)
        return this._element.innerHTML = `
        <h2>Hello, ${user._name}!</h2>
        <p style="display: inline-block"> (${user._email}) </p><br>
        <p style="display: inline-block"> This is your application menu </p>
        <ul style="width: 100%; display: flex; flex-direction: row; justify-content: space-evenly; list-style: none; padding-left: 0; border: solid 1px #245880; border-radius: 20px;">
            <a style="text-decoration: none" href="../html/tasks.html"><li>Manage Tasks</li></a>
            <a style="text-decoration: none" href="../html/main.html"><li>Login</li></a>
            <a style="text-decoration: none" href="./main.html"><li>Back</li></a>
        </ul>
        <div class="social-media-icons" style="display: flex; flex-direction: row; justify-content: space-evenly;">
            <a href="https://github.com/felipecro28"><img src="../img/GitHub_Logo.png" alt="logo Github" width=50 height=30></a>
            <a href="https://www.linkedin.com/in/carvalho-felipe28/"><img src="../img/linkedin.png" alt="logo Github" width=25 height=20></a>
        </div>`
    }
}