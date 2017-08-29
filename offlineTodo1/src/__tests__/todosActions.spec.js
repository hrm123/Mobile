"use strict";
exports.__esModule = true;
var TodosActionsTypes = require("../actions/actionTypes");
var TodosActions = require("../actions/todosActions");
var Mocks = require("./mocks");
// import initialState from '../reducers/initialState'
describe('todo actions tests', function () {
    var store = Mocks.mockStore;
    beforeEach(function () {
        store.clearActions();
    });
    it('should create an action to add todo', function () {
        var currentTodo = {
            Complete: false,
            Task: 'test add action creator',
            TaskId: 1,
            taskType: 'general'
        };
        // TodosActions.addTodos( currentTodo)(store.dispatch, store.getState, {todo: currentTodo})
        store.dispatch(TodosActions.addTodos(currentTodo));
        var actions = store.getActions();
        expect(actions[0]).toEqual({ 'todo': currentTodo, 'type': TodosActionsTypes.ADD_TODOS });
    });
    it('should create an action to edit todo', function () {
    });
    it('should create an action to delete todo', function () {
    });
});
