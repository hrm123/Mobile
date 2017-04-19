const actionTypes =  require('./actionTypes');  
import firebase from 'firebase';
//action creators
import { Actions } from 'react-native-router-flux';

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


const Login1 = (acct) =>{
  return (dispatch,getState) => {
      debugger;
      const currentState = getState();
      dispatch( {type: actionTypes.LOGIN, acct});
      return new Promise(function(resolve, reject){
        //fetch todos from firebase and resolve the Promise
          const ref = firebase.database().ref("/");
            const userRef= ref.child(currentState.acct.userName.replace("@","_").replace(".","-"));
            debugger;
            const todosRef = userRef.child("todos"); 
            resolve(todosRef);
      });
  }
};


const Login = (acct) =>{
  return (dispatch,getState) => {
      debugger;
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
    debugger;
    if(getState().acct.userName !== "ANONYMOUS"){
      Actions.todos({ "acctFromRouter" : getState().acct});
    }
  };
};

	const startListeningToAuth =  () => {
		return  (dispatch,getState) => {
      debugger;
			firebase.auth().onAuthStateChanged(function(user){
				if (user){ 
          debugger;
          if(getState().acct.userName !== user.email){
            const acct = {userName: user.email, loggedIn : true, loaded : false };
            dispatch(Login(acct)); /* .then( (data) => { 
              debugger;
              dispatch(ChangeRouteToTodos());
            });
            //setTimeout( () => { dispatch(ChangeRouteToTodos());} );*/
          }
				} else {
          debugger;
          const acct = {userName: 'ANONYMOUS', loggedIn : false, loaded : false }
					if (getState().auth && getState().auth.userName !== 'ANONYMOUS'){ // log out if not already logged out
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
  startListeningToAuth,
  ChangeRouteToTodos
};