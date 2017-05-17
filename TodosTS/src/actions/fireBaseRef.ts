
const actionTypes =  require('./actionTypes');  

const SetFirebaseRef = (ref) => {
    return (dispatch,getState) => {
        dispatch({ type: actionTypes.FIREBASE_REF_SET, value: ref });
    }  
};


module.exports = {
  SetFirebaseRef
};