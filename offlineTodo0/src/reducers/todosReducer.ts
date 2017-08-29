import initialState from './initialState'
// import {REHYDRATE} from 'redux-persist/constants'
import * as TodosTsActionTypes from '../actions/actionTypes'
import * as TodosTsTypes from '../types/todoTypes'

export default function todosReducer(currentState: TodosTsTypes.TodosState = initialState.todos,
          action: TodosTsActionTypes.TodosBaseActions) {
  switch (action.type) {
    case TodosTsActionTypes.LOAD_TODOS_SUCCESS:
      return action.todos
    case TodosTsActionTypes.TASK_TITLE_CHANGED:
      return Object.assign({}, currentState, {'inputValue' : action.newTitle})
    case TodosTsActionTypes.ADD_TODOS:
      return Object.assign({}, currentState, { maxTodoIndex : action.todo.TaskId },
          { pendingTodos : currentState.pendingTodos.concat( action.todo ) })
    case TodosTsActionTypes.COMPLETE_TODOS:
      console.log(' case TodosTsActionTypes.COMPLETE_TODOS')
      const newPendingTodos = currentState.pendingTodos.filter(function(x) {return x.TaskId !==  action.todo.TaskId})
      const newCompletedTodos = currentState.completedTodos.concat( action.todo )
      return Object.assign({}, currentState, { pendingTodos :  newPendingTodos, completedTodos: newCompletedTodos  })
    case TodosTsActionTypes.EDIT_TODOS:
      const editedIndex = currentState.pendingTodos.map(function(x) {return x.TaskId }).indexOf(action.todo.TaskId)
      const changedTodo = Object.assign({}, currentState.pendingTodos.filter(
                                (td) => td.TaskId === action.todo.TaskId )[0])
      const clonedArray = JSON.parse(JSON.stringify(currentState.pendingTodos))
      clonedArray.splice(editedIndex, 1, changedTodo )
      return Object.assign({}, currentState, { pendingTodos :  clonedArray })
    case TodosTsActionTypes.DELETE_TODOS:
      const newPendingTodos1 = currentState.pendingTodos.filter(function(x) {return x.TaskId !==  action.todo.TaskId})
      const newDeletedTodos = currentState.deletedTodos.concat( action.todo )
      return Object.assign({}, currentState, { pendingTodos :  newPendingTodos1, deletedTodos: newDeletedTodos  })
    case TodosTsActionTypes.CHANGE_TODO_TYPE:
      return Object.assign({}, currentState, { taskStatus: action.todo.taskType })
    case TodosTsActionTypes.REHYDRATE:
      const savedState = action.payload.pendingTodos
      if (savedState) {
        return {...currentState, ...savedState}
      } else {
        return currentState
    }
    default:
      return currentState
  }
}