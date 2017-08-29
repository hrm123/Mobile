"use strict";
exports.__esModule = true;
// import TodosTsTypes from '../types/todoTypes'
var initialState_1 = require("../reducers/initialState");
var todosReducer_1 = require("../reducers/todosReducer");
describe('todos reducer tests', function () {
    xit('should return the added todo state', function () {
        var actionType = {
            type: 'App/ADD_TODOS', todo: { taskType: 'General', TaskId: 1, Complete: false, Task: 'test1' }
        };
        expect(todosReducer_1["default"](undefined, actionType)).toEqual(initialState_1["default"]);
    });
    it('should return the initial state', function () {
        var actionType = { type: '' };
        expect(todosReducer_1["default"](undefined, actionType)).toEqual(initialState_1["default"].todos);
    });
});
