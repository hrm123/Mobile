import initialState from './initialState';
const types =  require('../actions/actionTypes');  



export default function loginReducer(currentState = initialState.acct, action) {  
  switch(action.type) {
    case types.LOGIN:
        return Object.assign({},currentState, action.account);
    case types.LOGOUT:
      return Object.assign({},currentState, action.account);
    default:
        return currentState;
  }
}