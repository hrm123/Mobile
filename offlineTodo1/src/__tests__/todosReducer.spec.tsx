import * as TodosTsActionTypes from '../actions/actionTypes'
// import TodosTsTypes from '../types/todoTypes'
import initialState from '../reducers/initialState'
import todosReducer from '../reducers/todosReducer'

describe('todos reducer tests', () => {
    xit('should return the added todo state', () => {
        let actionType: TodosTsActionTypes.ActionAddTodo = {
            type: 'App/ADD_TODOS', todo: {taskType: 'General', TaskId: 1, Complete: false, Task: 'test1'} }
        expect(
            todosReducer(undefined, actionType )
        ).toEqual(initialState)
    })
    it('should return the initial state', () => {
        let actionType: TodosTsActionTypes.OtherAction = { type: '' }
        expect(
            todosReducer(undefined, actionType )
        ).toEqual(initialState.todos)
    })

})