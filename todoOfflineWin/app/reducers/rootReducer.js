
import {combineReducers} from 'redux';  
import todos from './todosReducer';
import acct from './loginReducer';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';

const rootReducer = combineReducers({  
  // short hand property names
  todos, acct, firebase
})

export default rootReducer;  