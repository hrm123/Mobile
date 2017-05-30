import initialState from './initialState'
// import {REHYDRATE} from 'redux-persist/constants'
import * as TodosTsActions from '../actions/actionTypes'
import * as TodosTsTypes from '../types/todoTypes'


export default function todosReducer(currentState: TodosTsTypes.TodosState = initialState.todos,
          action: TodosTsActions.TodosBaseActions) {
  switch (action.type) {
    case TodosTsActions.LOAD_TODOS_SUCCESS:
      return action.todos
    case TodosTsActions.TASK_TITLE_CHANGED:
      return Object.assign({}, currentState, {'inputValue' : action.newTitle})
    case TodosTsActions.ADD_TODOS:
        // { "Task" : todoText, "TaskType" : "General", "TaskId":  ownProps.maxTodoIndex++}
      return Object.assign({}, currentState, { maxTodoIndex : action.todo.TaskId }, { todos : currentState.todos.concat( action.todo ) });
    case TodosTsActions.EDIT_TODOS:
      const editedIndex = currentState.todos.map(function(x) {return x.TaskId }).indexOf(action.todo.TaskId)
      const changedTodo = Object.assign({}, currentState.todos.filter(
                                (td) => td.TaskId === action.todo.TaskId )[0], {Complete: action.todo.Complete })
      const clonedArray = JSON.parse(JSON.stringify(currentState.todos))
      clonedArray.splice(editedIndex, 1, changedTodo )
      return Object.assign({}, currentState, { todos :  clonedArray })
    case TodosTsActions.DELETE_TODOS:
      return Object.assign({}, currentState, { todos : currentState.todos.filter( (td) => td.TaskId !== action.todo.TaskId ) })
    case TodosTsActions.CHANGE_TODO_TYPE:
      return Object.assign({}, currentState, { taskStatus: action.todo.taskType })
    case TodosTsActions.REHYDRATE:
      const savedState = action.payload.todos
      if (savedState) {
        return {...currentState, ...savedState}
      } else {
        return currentState
    }
    default:
      return currentState
  }
}