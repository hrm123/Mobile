const actionTypes =  require('./actionTypes');  

//action creators

function loadTodosSuccess1(todos) {  
  return {type: actionTypes.LOAD_TODOS_SUCCESS, todos};
};


const loadTodosSuccess = (todos) =>  {  
  return (dispatch,getState) => {
    debugger;
    dispatch ( {type: actionTypes.LOAD_TODOS_SUCCESS, todos});
  }
};

const titleChanged = (newTitle) => { 
    return (dispatch,getState) => {
      dispatch( {type: actionTypes.TASK_TITLE_CHANGED, newTitle});
  }
};

const addTodos = (todo) => { 
    return (dispatch,getState) => {
      debugger;
      const currentState = getState();
      todo.TaskId = currentState.todos.maxTodoIndex + 1;
      dispatch( {type: actionTypes.ADD_TODOS, todo});
  }
};

module.exports = {
  loadTodosSuccess,
  addTodos,
  titleChanged
};