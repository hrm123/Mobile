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
      return Object.assign({},currentState, { maxTodoIndex :action.todo.TaskId }, { todos : currentState.todos.concat( action.todo ) });
    case types.EDIT_TODOS:
      debugger;
      var editedIndex = currentState.todos.map(function(x) {return x.TaskId; }).indexOf(action.todo.TaskId);
      var changedTodo = Object.assign({}, currentState.todos.filter( (td) => td.TaskId === action.todo.TaskId ), {Complete: action.todo.Complete });
      return Object.assign({},currentState, { todos : currentState.todos.splice(editedIndex, 1, changedTodo ) });
    case types.DELETE_TODOS:
      return Object.assign({},currentState, { todos : currentState.todos.filter( (td) => td.TaskId !== action.todo.TaskId ) });
    default: 
      return currentState;
  }
}