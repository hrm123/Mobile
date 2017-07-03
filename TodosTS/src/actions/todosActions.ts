import * as ActionTypes from './actionTypes'
import * as TodosTsTypes from '../types/todoTypes'
// typescripted
import {ThunkAction} from 'redux-thunk'

export type loadTodosSuccess = (todos) => ThunkAction<void, TodosTsTypes.AppState, {}>
export const loadTodosSuccess: ThunkAction<void, TodosTsTypes.AppState, {}> = (todos) =>  {
  return (dispatch) => {
    dispatch ( {type: ActionTypes.LOAD_TODOS_SUCCESS, todos})
  }
}

export type titleChanged = {type: ActionTypes.TASK_TITLE_CHANGED, newTitle}
export const titleChanged: ThunkAction<void, TodosTsTypes.AppState, {}> = (newTitle) => {
    return (dispatch) => {
      dispatch( {type: ActionTypes.TASK_TITLE_CHANGED, newTitle})
  }
}

export type AddTodos = (todo: TodosTsTypes.Todo) => ThunkAction<any, TodosTsTypes.AppState, {todo: TodosTsTypes.Todo}>
export const addTodos: AddTodos = (todo) => {
    return (dispatch, getState) => {
      const currentState = getState()
      console.log('in addTodos action')
      const currentTodo: TodosTsTypes.Todo = todo
      currentTodo.TaskId = currentState.todos.maxTodoIndex + 1
      dispatch( {type: ActionTypes.ADD_TODOS, todo})
  }
}

export type editTodos = (todo) =>  ThunkAction<void, {}, {todo: TodosTsTypes.Todo}>
export const editTodos: ThunkAction<void, {}, {todo: TodosTsTypes.Todo}>  = (todo) => {
    return (dispatch) => {
      dispatch( {type: ActionTypes.EDIT_TODOS, todo})
  }
}

export type deleteTodos = (todo) =>  ThunkAction<void, {}, {todo: TodosTsTypes.Todo}>
export const deleteTodos: ThunkAction<void, {}, {todo: TodosTsTypes.Todo}> = (todo) => {
    return (dispatch) => {
      dispatch( {type: ActionTypes.DELETE_TODOS, todo})
  }
}


export type todoTypeChanged = (todo) => ThunkAction<void, {}, {todo: TodosTsTypes.Todo}>
export const todoTypeChanged: ThunkAction<void, {}, {todo: TodosTsTypes.Todo}> = (todo) => {
  return (dispatch) => {
      dispatch( {type: ActionTypes.CHANGE_TODO_TYPE, todo})
  }
}



export type TodosActions =
  loadTodosSuccess|
  AddTodos|
  titleChanged|
  editTodos|
  deleteTodos|
  todoTypeChanged
