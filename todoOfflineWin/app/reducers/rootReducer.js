
import {combineReducers} from 'redux';  
import todos from './todosReducer';
import acct from './loginReducer';
import fbRef from './firebaseRef';
import fbConfig from './firebaseConfig';
import nav from './navReducer';

const rootReducer = combineReducers({  
  // short hand property names
  todos, acct, fbRef, fbConfig,nav
})

export default rootReducer;  