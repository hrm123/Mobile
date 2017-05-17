const types =  require('../actions/actionTypes');  

export default function fbRefReducer(state = {}, action) {
  switch (action.type) {
  case types.FIREBASE_REF_SET:
    return action.value;
  default:
    return state;
  }
}