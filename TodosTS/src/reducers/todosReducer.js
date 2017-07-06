"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var initialState_1 = require("./initialState");
// import {REHYDRATE} from 'redux-persist/constants'
var TodosTsActionTypes = require("../actions/actionTypes");
function todosReducer(currentState, action) {
    if (currentState === void 0) { currentState = initialState_1["default"].todos; }
    switch (action.type) {
        case TodosTsActionTypes.LOAD_TODOS_SUCCESS:
            return action.todos;
        case TodosTsActionTypes.TASK_TITLE_CHANGED:
            return Object.assign({}, currentState, { 'inputValue': action.newTitle });
        case TodosTsActionTypes.ADD_TODOS:
            // { "Task" : todoText, "TaskType" : "General", "TaskId":  ownProps.maxTodoIndex++}
            console.log(' case TodosTsActionTypes.ADD_TODOS');
            return Object.assign({}, currentState, { maxTodoIndex: action.todo.TaskId }, { todos: currentState.todos.concat(action.todo) });
        case TodosTsActionTypes.EDIT_TODOS:
            var editedIndex = currentState.todos.map(function (x) { return x.TaskId; }).indexOf(action.todo.TaskId);
            var changedTodo = Object.assign({}, currentState.todos.filter(function (td) { return td.TaskId === action.todo.TaskId; })[0], { Complete: action.todo.Complete });
            var clonedArray = JSON.parse(JSON.stringify(currentState.todos));
            clonedArray.splice(editedIndex, 1, changedTodo);
            return Object.assign({}, currentState, { todos: clonedArray });
        case TodosTsActionTypes.DELETE_TODOS:
            return Object.assign({}, currentState, { todos: currentState.todos.filter(function (td) { return td.TaskId !== action.todo.TaskId; }) });
        case TodosTsActionTypes.CHANGE_TODO_TYPE:
            return Object.assign({}, currentState, { taskStatus: action.todo.taskType });
        case TodosTsActionTypes.REHYDRATE:
            var savedState = action.payload.todos;
            if (savedState) {
                return __assign({}, currentState, savedState);
            }
            else {
                return currentState;
            }
        default:
            return currentState;
    }
}
exports["default"] = todosReducer;
