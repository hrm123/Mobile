const actionTypes =  require('./actionTypes');  

//action creators

function loadTodosSuccess1(todos) {  
  return {type: actionTypes.LOAD_TODOS_SUCCESS, todos};
};


const loadTodosSuccess = (todos) =>  {  
  return (dispatch,getState) => {
    dispatch ( {
      type: actionTypes.LOAD_TODOS_SUCCESS,
      payload: todos,
      meta: {
        offline: {
          // the network action to execute:
          effect: { url: '/api/follow', method: 'POST', body: { userId } },
          // action to dispatch when effect succeeds:
          commit: { type: 'FOLLOW_USER_COMMIT', meta: { userId } },
          // action to dispatch if network action fails permanently:
          rollback: { type: 'FOLLOW_USER_ROLLBACK', meta: { userId } }
        }
      }
    });
  }
};

const titleChanged = (newTitle) => { 
    return (dispatch,getState) => {
      dispatch( {type: actionTypes.TASK_TITLE_CHANGED, newTitle});
  }
};

const addTodos = (todo) => { 
    return (dispatch,getState) => {
      const currentState = getState();
      todo.TaskId = currentState.todos.maxTodoIndex + 1;
      dispatch( {type: actionTypes.ADD_TODOS, todo});
  }
};

const editTodos = (todo) => { 
    return (dispatch,getState) => {
      dispatch( {type: actionTypes.EDIT_TODOS, todo});
  }
};

const deleteTodos = (todo) => { 
    return (dispatch,getState) => {
      dispatch( {type: actionTypes.DELETE_TODOS, todo});
  }
};

const todoTypeChanged = (taskStatus) =>{
  return (dispatch,getState) => {
      dispatch( {type: actionTypes.CHANGE_TODO_TYPE, taskStatus});
  }
};

module.exports = {
  loadTodosSuccess,
  addTodos,
  titleChanged,
  editTodos,
  deleteTodos,
  todoTypeChanged
};