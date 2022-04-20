"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserView =
/*#__PURE__*/
function () {
  function UserView(element) {
    _classCallCheck(this, UserView);

    this._element = element;
    this._menuDiv = document.querySelector('.menu-div');
  }

  _createClass(UserView, [{
    key: "viewNewUser",
    value: function viewNewUser(user) {
      user = localStorage.getItem('newUser');
      user = JSON.parse(user);
      var h2 = document.createElement("h2");
      h2.innerText = "Hi, ".concat(user._name, "!");
      document.querySelector('.text-task').prepend(h2);
      return this._element.innerHTML = "\n        <h2>Hello, ".concat(user._name, "!</h2>\n        <p style=\"display: inline-block\"> (").concat(user._email, ") </p><br>\n        <p style=\"display: inline-block\"> This is your application menu </p>\n        <ul style=\"width: 100%; display: flex; flex-direction: row; justify-content: space-evenly; list-style: none; padding-left: 0; border: solid 1px #245880; border-radius: 20px;\">\n            <a style=\"text-decoration: none\" href=\"../html/tasks.html\"><li>Manage Tasks</li></a>\n            <a style=\"text-decoration: none\" href=\"../html/main.html\"><li>Login</li></a>\n            <a style=\"text-decoration: none\" href=\"./taskManager.html\"><li>Add new task</li></a>\n        </ul>\n        <div class=\"social-media-icons\" style=\"display: flex; flex-direction: row; justify-content: space-evenly;\">\n            <a href=\"https://github.com/felipecro28\"><img src=\"../img/GitHub_Logo.png\" alt=\"logo Github\" width=50 height=30></a>\n            <a href=\"https://www.linkedin.com/in/carvalho-felipe28/\"><img src=\"../img/linkedin.png\" alt=\"logo Github\" width=25 height=20></a>\n        </div>");
    }
  }]);

  return UserView;
}();