"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Task =
/*#__PURE__*/
function () {
  function Task(taskName, deadline, description, type) {
    _classCallCheck(this, Task);

    this._tasknName = taskName;
    this._deadline = deadline;
    this._description = description;
    this._type = type;
  }

  _createClass(Task, [{
    key: "taskName",
    get: function get() {
      return this._taskName;
    }
  }, {
    key: "deadline",
    get: function get() {
      return new Date(this._deadline.getTime());
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }]);

  return Task;
}();