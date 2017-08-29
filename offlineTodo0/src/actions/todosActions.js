"use strict";
exports.__esModule = true;
var ActionTypes = require("./actionTypes");
exports.loadTodosSuccess = function (todos) {
    return function (dispatch) {
        dispatch({ type: ActionTypes.LOAD_TODOS_SUCCESS, todos: todos });
    };
};
exports.titleChanged = function (newTitle) {
    return function (dispatch) {
        dispatch({ type: ActionTypes.TASK_TITLE_CHANGED, newTitle: newTitle });
    };
};
exports.addTodos = function (todo) {
    return function (dispatch, getState) {
        var currentState = getState();
        // console.log('in addTodos action')
        var currentTodo = todo;
        currentTodo.TaskId = currentState.todos.maxTodoIndex + 1;
        dispatch({ type: ActionTypes.ADD_TODOS, todo: todo });
    };
};
exports.editTodos = function (todo) {
    return function (dispatch) {
        dispatch({ type: ActionTypes.EDIT_TODOS, todo: todo });
    };
};
exports.deleteTodos = function (todo) {
    return function (dispatch) {
        dispatch({ type: ActionTypes.DELETE_TODOS, todo: todo });
    };
};
exports.todoTypeChanged = function (todo) {
    return function (dispatch) {
        dispatch({ type: ActionTypes.CHANGE_TODO_TYPE, todo: todo });
    };
};
