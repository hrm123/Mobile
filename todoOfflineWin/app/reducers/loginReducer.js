import initialState from './initialState';
const types =  require('../actions/actionTypes');  



export default function loginReducer(currentState = initialState.acct, action) {  
  switch(action.type) {
    case types.LOGIN:
        debugger;
        return Object.assign({},currentState, { loggedIn : true});
    case types.LOGOUT:
        debugger;
      return Object.assign({},currentState, { loggedIn : false});
    default:
        debugger;
        return currentState;
  }
}