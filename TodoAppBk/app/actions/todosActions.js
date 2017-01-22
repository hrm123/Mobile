const actionTypes =  require('./actionTypes');  

//action creators

function loadTodosSuccess(todos) {  
  return {type: actionTypes.LOAD_TODOS_SUCCESS, todos};
}

addTodos = (todo) => { 
    return (dispatch,getState) => {
      debugger;
      const currentState = getState();
      dispatch( {type: actionTypes.ADD_TODOS, todo});
  }
}

export {
  loadTodosSuccess,
  addTodos
}