import * as ActionTypes from './actionTypes';
export const loadTodosSuccess = (todos) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.LOAD_TODOS_SUCCESS, todos });
    };
};
export const titleChanged = (newTitle) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.TASK_TITLE_CHANGED, newTitle });
    };
};
export const addTodos = (todo) => {
    return (dispatch, getState) => {
        const currentState = getState();
        // console.log('in addTodos action')
        const currentTodo = todo;
        currentTodo.TaskId = currentState.todos.maxTodoIndex + 1;
        dispatch({ type: ActionTypes.ADD_TODOS, todo });
    };
};
export const editTodos = (todo) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.EDIT_TODOS, todo });
    };
};
export const deleteTodos = (todo) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.DELETE_TODOS, todo });
    };
};
export const todoTypeChanged = (todo) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.CHANGE_TODO_TYPE, todo });
    };
};
//# sourceMappingURL=todosActions.js.map