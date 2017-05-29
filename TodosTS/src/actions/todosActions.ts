import {ActionTypes} from './actionTypes'
import * as TodosTsTypes from '../types/todoTypes'
// action creators
import {ThunkAction} from 'redux-thunk'

export const loadTodosSuccess = (todos) =>  {
  return (dispatch) => {
    dispatch ( {type: ActionTypes.LOAD_TODOS_SUCCESS, todos})
  }
}

export const titleChanged = (newTitle) => {
    return (dispatch) => {
      dispatch( {type: ActionTypes.TASK_TITLE_CHANGED, newTitle})
  }
}

export const addTodos: ThunkAction<void, TodosTsTypes.AppState, {todo: TodosTsTypes.Todo}> = (todo) => {
    return (dispatch, getState, extraArg) => {
      const currentState = getState()
      const currentTodo: TodosTsTypes.Todo = extraArg.todo
        currentTodo.TaskId = currentState.todos.maxTodoIndex + 1
        dispatch( {type: ActionTypes.ADD_TODOS, todo})
  }
}

export const editTodos = (todo) => {
    return (dispatch) => {
      dispatch( {type: ActionTypes.EDIT_TODOS, todo})
  }
}

export const deleteTodos = (todo) => {
    return (dispatch) => {
      dispatch( {type: ActionTypes.DELETE_TODOS, todo})
  }
}

export const todoTypeChanged = (taskStatus) => {
  return (dispatch) => {
      dispatch( {type: ActionTypes.CHANGE_TODO_TYPE, taskStatus})
  }
}


/*
export type TodosActions =
  loadTodosSuccess|
  addTodos|
  titleChanged|
  editTodos|
  deleteTodos|
  todoTypeChanged
*/