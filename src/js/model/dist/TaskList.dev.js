"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TaskList =
/*#__PURE__*/
function () {
  function TaskList() {
    _classCallCheck(this, TaskList);

    this._taskList = [];
  }

  _createClass(TaskList, [{
    key: "addTaskList",
    value: function addTaskList(task) {
      this._taskList.push(task);

      console.log(this._taskList);
    }
  }], [{
    key: "removeTask",
    value: function removeTask(event) {
      var object = localStorage.getItem('taskList');
      var list = JSON.parse(object);
      list = list._taskList;
      var index = 0;
      var taskToRemove = event.srcElement.id;
      list.map(function (task) {
        return task._tasknName == taskToRemove ? index = list.indexOf(task) : true;
      });
      var removedItem = list.splice(index, 1);
      var objeto = new Object();
      objeto._taskList = _toConsumableArray(list);
      localStorage.setItem('taskList', JSON.stringify(objeto));
      document.location.reload(true);
    }
  }]);

  return TaskList;
}();