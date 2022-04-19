"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TaskView =
/*#__PURE__*/
function () {
  function TaskView(elemento) {
    _classCallCheck(this, TaskView);

    this._elemento = elemento;
  }

  _createClass(TaskView, [{
    key: "showTask",
    value: function showTask(object) {
      var list = JSON.parse(object);
      list = list._taskList;
      console.log(list);
      this._elemento.innerHTML = list.map(function (elemento) {
        return "\n        <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\" style=\"background-color: rgba(69, 152, 219, 0.479); margin: 10px 0;\">\n          <div class=\"d-flex w-100 justify-content-between\">\n            <h5 class=\"mb-1\">".concat(elemento._tasknName, "</h5>\n            <small class=\"text-muted\">").concat(elemento._deadline, " days left</small>\n          </div>\n          <p class=\"mb-1\">").concat(elemento._description, "</p>\n          <div class=\"d-flex w-100 justify-content-between\">\n          <small class=\"text-muted\">").concat(elemento._type, "</small>\n          <p>&#x26D4;</p>\n          </div>\n        </a>\n        ");
      });
    }
  }]);

  return TaskView;
}();