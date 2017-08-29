import initialState from './initialState';
// import {REHYDRATE} from 'redux-persist/constants'
import * as TodosTsActionTypes from '../actions/actionTypes';
export default function todosReducer(currentState = initialState.todos, action) {
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
            const editedIndex = currentState.todos.map(function (x) { return x.TaskId; }).indexOf(action.todo.TaskId);
            const changedTodo = Object.assign({}, currentState.todos.filter((td) => td.TaskId === action.todo.TaskId)[0], { Complete: action.todo.Complete });
            const clonedArray = JSON.parse(JSON.stringify(currentState.todos));
            clonedArray.splice(editedIndex, 1, changedTodo);
            return Object.assign({}, currentState, { todos: clonedArray });
        case TodosTsActionTypes.DELETE_TODOS:
            return Object.assign({}, currentState, { todos: currentState.todos.filter((td) => td.TaskId !== action.todo.TaskId) });
        case TodosTsActionTypes.CHANGE_TODO_TYPE:
            return Object.assign({}, currentState, { taskStatus: action.todo.taskType });
        case TodosTsActionTypes.REHYDRATE:
            const savedState = action.payload.todos;
            if (savedState) {
                return Object.assign({}, currentState, savedState);
            }
            else {
                return currentState;
            }
        default:
            return currentState;
    }
}
//# sourceMappingURL=todosReducer.js.map