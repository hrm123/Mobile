import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function todosReducer(state = initialState, action) {  
  switch(action.type) {
    case types.LOAD_TODOS_SUCCESS:
      return action.todos
    case types.ADD_TODOS:
      return Object.assign({}, { todos : state.todos.push(todo)});
    default: 
      return state;
  }
}