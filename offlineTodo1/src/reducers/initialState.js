"use strict";
exports.__esModule = true;
var initialTodos = [
    {
        Complete: false,
        Task: 'task1',
        TaskId: 1,
        taskType: 'Career'
    },
    {
        Complete: false,
        Task: 'task2',
        TaskId: 2,
        taskType: 'Personal'
    }
];
var initialTodosState = {
    todos: initialTodos,
    inputValue: 'My first todo',
    taskType: 'General',
    taskStatus: 'All',
    maxTodoIndex: 2
};
var initialState = {
    todos: initialTodosState
};
exports["default"] = initialState;
