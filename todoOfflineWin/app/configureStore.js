import { AsyncStorage } from 'react-native'; // we need to import AsyncStorage to use as a storage engine
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist'; 
import rootReducer from './reducers/rootReducer';  
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

const middleWare = [];


var config = {
    apiKey: "AIzaSyBa2YaOyiL8ksvMcF10zCM4B1dwdwj0rE0",
    authDomain: "offlinetodos.firebaseapp.com",
    databaseURL: "https://offlinetodos.firebaseio.com",
    storageBucket: "offlinetodos.appspot.com",
    messagingSenderId: "617493806104"
  };

export default configureStore = (option = {}, onComplete) => {
  debugger;
  const middlewares = option.middlewares || [thunk] || reduxFirebase(fbConfig, { userProfile: 'users' });
  const {persistedState} = option;
  //const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const composeEnhancers = composeWithDevTools({ realtime: true });
  const store =  createStore(
    rootReducer,
     persistedState, 
      composeEnhancers(applyMiddleware(...middlewares))
      //,autoRehydrate()
  ); // autoRehydrate()(createStoreWithMiddleware)(rootReducer);
  persistStore(store, { storage: AsyncStorage }, onComplete).purge() ;
  
 // persistStore(store, config, callback).purge() ; //-- call to clean up storage cache
  return store;
}; 