import { AsyncStorage } from 'react-native'; // we need to import AsyncStorage to use as a storage engine
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist'; 
import rootReducer from './reducers/rootReducer';  
import thunk from 'redux-thunk';

const middleWare = [];



export default configureStore = (option = {}, onComplete) => {
  const middlewares = option.middlewares || [thunk];
  const {persistedState} = option;
  //const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const store =  createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(...middlewares),
      autoRehydrate()
    )
  ); // autoRehydrate()(createStoreWithMiddleware)(rootReducer);
  persistStore(store, { storage: AsyncStorage }, onComplete);
  
  //persistStore(store, config, callback).purge() -- call to clean up storage cache
  return store;
}; 