const actionTypes =  require('./actionTypes');  

function loadTodosSuccess1(todos) {  
  return {type: actionTypes.LOAD_TODOS_SUCCESS, todos};
};


const loadTodosSuccess = (todos) =>  {  
  return (dispatch,getState) => {
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



const Login = (acct) =>{
  return (dispatch,getState) => {
      //const currentState = getState();
      dispatch( {type: actionTypes.LOGIN, acct});
  }
};


const Logout = (acct) =>{
  return (dispatch,getState) => {
      dispatch( {type: actionTypes.LOGOUT, acct});
  }
};

const ChangeRouteToTodos = () => {
  return  (dispatch,getState) => {
    if(getState().acct.userName !== "ANONYMOUS"){
      Actions.todos({ "acctFromRouter" : getState().acct});
    }
  };
};


module.exports = {
  loadTodosSuccess,
  addTodos,
  titleChanged,
  editTodos,
  deleteTodos,
  todoTypeChanged,
  Login,
  Logout,
  ChangeRouteToTodos
}; 