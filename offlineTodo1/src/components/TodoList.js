"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Todo_1 = require("./Todo");
var TodoList = function (props) {
    var getVisibleTodos = function (todos, type) {
        switch (type) {
            case 'All':
                return todos;
            case 'Complete':
                return todos.filter(function (t) { return t.Complete; });
            case 'Active':
                return todos.filter(function (t) { return !t.Complete; });
            default:
                return todos;
        }
    };
    var todoElements = (getVisibleTodos(props.todos, props.type) || []).map(function (todo1) {
        var todoModel = {
            key: todo1.TaskId,
            todo: todo1,
            toggleComplete: props.toggleComplete,
            deleteTodo: props.deleteTodo
        };
        return (<Todo_1["default"] {...todoModel}/>);
    });
    return (<react_native_1.View>
            {todoElements}
        </react_native_1.View>);
};
exports["default"] = TodoList;
