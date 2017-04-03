import initialState from './initialState';
import {initialState1} from './initialState';
const types =  require('../actions/actionTypes');  



export default function loginReducer(currentState = initialState.acct, action) {  
  switch(action.type) {
    case types.LOGIN:
        const newState = Object.assign({}, action.acct);
        return {loaded: true, loggedIn: true, userName: action.acct.userName};
    case types.LOGOUT:
      return Object.assign({},currentState, action.account, { userName: 'ANONYMOUS', loggedIn : false});
    default:
        return currentState; // {loaded: currentState.loaded, loggedIn: currentState.loggedIn , userName: currentState.userName};
  }
}