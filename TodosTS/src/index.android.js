"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var App_1 = require("./containers/App");
var react_native_1 = require("react-native");
var TodosTS = (function (_super) {
    __extends(TodosTS, _super);
    function TodosTS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TodosTS.prototype.render = function () {
        return (<App_1["default"] />);
    };
    return TodosTS;
}(react_1.Component));
exports["default"] = TodosTS;
react_native_1.AppRegistry.registerComponent('TodosTS', function () { return TodosTS; });
