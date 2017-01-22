const types =  require('../actions/actionTypes');  
import initialState from './initialState';

export default function todosReducer(currentState = initialState, action) {  
  switch(action.type) {
    case types.LOAD_TODOS_SUCCESS:
      return action.todos
    case types.TASK_TITLE_CHANGED:
      return Object.assign({},currentState, {"inputValue" : action.newTitle});
    case types.ADD_TODOS:
        // { "Task" : todoText, "TaskType" : "General", "TaskId":  ownProps.maxTodoIndex++}
      const newState = Object.assign({},currentState, { maxTodoIndex :action.todo.TaskId }, { todos : currentState.todos.concat( action.todo ) });
      return newState;
    default: 
      return currentState;
  }
}