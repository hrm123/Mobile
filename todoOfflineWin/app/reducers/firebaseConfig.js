const types =  require('../actions/actionTypes');  

export default function firebaseConfig(state = {}, action) {
  switch (action.type) {
  case types.FIREBASE_CONFIG_REPLACE :
    return Object.assign({}, action.value); // note: we replace state entirely here
  default:
    return state;
  }
}