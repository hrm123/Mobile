const types =  require('../actions/actionTypes');  
import initialState from './initialState';

export default function todosReducer(state = initialState, action) {  
  switch(action.type) {
    case types.LOAD_TODOS_SUCCESS:
      return action.todos
    case types.ADD_TODOS:
      debugger;
        // { "Task" : todoText, "TaskType" : "General", "TaskId":  ownProps.maxTodoIndex++}
      return Object.assign({}, { todos : state.todos.push(action.todo)});
    default: 
      return state;
  }
}