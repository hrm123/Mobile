const types =  require('../actions/actionTypes');  

function firebaseRef(state = initialState, action) {
  switch (action.type) {
  case types.FIREBASE_REF_SET:
    return action.value;
  default:
    return state;
  }
}