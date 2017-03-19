
import {combineReducers} from 'redux';  
import todos from './todosReducer';
import acct from './loginReducer';


const rootReducer = combineReducers({  
  // short hand property names
  todos, acct
})

export default rootReducer;  