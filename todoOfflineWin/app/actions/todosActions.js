const actionTypes =  require('./actionTypes');  
import firebase from 'firebase';
//action creators

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


const Login = (account) =>{
  return (dispatch,getState) => {
      dispatch( {type: actionTypes.LOGIN, account});
  }
};


const Logout = (account) =>{
  return (dispatch,getState) => {
      dispatch( {type: actionTypes.LOGOUT, account});
  }
};


	const startListeningToAuth =  () => {
		return  (dispatch,getState) => {
      debugger;
			firebase.auth().onAuthStateChanged(function(user){
				if (user){ 
          debugger;
          const acct = {userName: user.email, loggedIn : true, loaded : false };
          dispatch(Login(acct));
				} else {
          debugger;
          const acct = {userName: 'ANONYMOUS', loggedIn : false, loaded : false }
					if (getState().auth.userName !== 'ANONYMOUS'){ // log out if not already logged out
						dispatch(Logout(acct));
					}
				}
			});
		}
	}


module.exports = {
  loadTodosSuccess,
  addTodos,
  titleChanged,
  editTodos,
  deleteTodos,
  todoTypeChanged,
  Login,
  Logout,
  startListeningToAuth
};