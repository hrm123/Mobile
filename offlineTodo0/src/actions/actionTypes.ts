// typescripted
import * as TodosTsTypes from '../types/todoTypes'

export type LOAD_TODOS_SUCCESS = 'App/LOAD_TODOS_SUCCESS'
export const LOAD_TODOS_SUCCESS: LOAD_TODOS_SUCCESS = 'App/LOAD_TODOS_SUCCESS'

export type ADD_TODOS = 'App/ADD_TODOS'
export const ADD_TODOS: ADD_TODOS = 'App/ADD_TODOS'

export type REFRESHING_TODOS = 'App/REFRESHING_TODOS'
export const REFRESHING_TODOS: REFRESHING_TODOS = 'App/REFRESHING_TODOS'

export type TASK_TITLE_CHANGED = 'App/TASK_TITLE_CHANGED'
export const TASK_TITLE_CHANGED: TASK_TITLE_CHANGED = 'App/TASK_TITLE_CHANGED'

export type EDIT_TODOS = 'App/EDIT_TODOS'
export const EDIT_TODOS: EDIT_TODOS = 'App/EDIT_TODOS'

export type COMPLETE_TODOS = 'App/COMPLETE_TODOS'
export const COMPLETE_TODOS: EDIT_TODOS = 'App/COMPLETE_TODOS'

export type DELETE_TODOS = 'App/DELETE_TODOS'
export const DELETE_TODOS: DELETE_TODOS = 'App/DELETE_TODOS'

export type CHANGE_TODO_TYPE = 'App/CHANGE_TODO_TYPE'
export const CHANGE_TODO_TYPE: CHANGE_TODO_TYPE = 'App/CHANGE_TODO_TYPE'

export type REHYDRATE = 'persist/REHYDRATE'
export const REHYDRATE: REHYDRATE = 'persist/REHYDRATE'

export type OtherAction = { type: '' }
export type ActionLoadTodosSuccess = {type: LOAD_TODOS_SUCCESS, todos: TodosTsTypes.TodosState}
export type ActionTaskTitleChanged = {type: TASK_TITLE_CHANGED, newTitle: string}
export type ActionAddTodo = {type: ADD_TODOS, todo: TodosTsTypes.Todo}
export type ActionEditTodo = {type: EDIT_TODOS, todo: TodosTsTypes.Todo}
export type ActionCompleteTodo = {type: COMPLETE_TODOS, todo: TodosTsTypes.Todo}
export type ActionDeleteTodo = {type: DELETE_TODOS, todo: TodosTsTypes.Todo}
export type ActionTodoTypeChange = {type: CHANGE_TODO_TYPE, todo: TodosTsTypes.Todo}
export type ActionReHydrate = {type: REHYDRATE, payload: TodosTsTypes.TodosState}
export type TodosBaseActions =  ActionLoadTodosSuccess |
                            ActionTaskTitleChanged |
                            ActionAddTodo |
                            ActionEditTodo |
                            ActionCompleteTodo |
                            ActionDeleteTodo |
                            ActionTodoTypeChange |
                            ActionReHydrate |
                            OtherAction
