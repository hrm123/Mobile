import initialState from './initialState';
const types =  require('../actions/actionTypes');  



export default function loginReducer(currentState = initialState.acct, action) {  
  switch(action.type) {
    case types.LOGIN:
        debugger;
        const newState = Object.assign({},currentState, action.account);;
        return newState;
    case types.LOGOUT:
      return Object.assign({},currentState, action.account, { userName: 'ANONYMOUS', loggedIn : false});
    default:
        return currentState;
  }
}