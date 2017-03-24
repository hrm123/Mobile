const actionTypes =  require('./actionTypes');  


const replaceConfig = (config) => { 
    return (dispatch,getState) => {
      const currentState = getState();
      dispatch( {type: actionTypes.FIREBASE_CONFIG_REPLACE, config});
  }
};

/**
 * Start listening to changes when the app boots
 */

const listenToConfigChanges = (config) => { 
    return (dispatch,getState) => {
      const { firebaseRef } = getState();
        firebaseRef.child('config').on('value', (snapshot) => {
            dispatch(replaceConfig(snapshot.val()));
        });
    }
};

/*
 * Save new config data
 */
const saveConfig = (config) => {
  return (dispatch, getState) => {
    const { firebaseRef } = getState();
    firebaseRef.child('config').set(config);
    // no need for dispatch, it will trigger Firebase 'value', which will dispatch `replaceConfig`
  };
};



module.exports = {
  replaceConfig,
  listenToConfigChanges,
  saveConfig
};