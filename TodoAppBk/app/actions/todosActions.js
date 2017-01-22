import * as types from './actionTypes';  

//action creators

function loadTodosSuccess(todos) {  
  return {type: types.LOAD_TODOS_SUCCESS, todos};
}

function addTodos(todo) {  
  return {type: types.ADD_TODOS, todo};
}

export {
  loadTodosSuccess,
  addTodos
}