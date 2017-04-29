import {createStore, applyMiddleware, compose} from 'redux';  
import rootReducer from './reducers/rootReducer';  
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults'


export default function configureStore(option = {}) {  
  const middlewares = option.middlewares;
  const {persistedState} = option;
  //TODO: check option.middlewares is an array
  return createStore(
    rootReducer,
    persistedState || {},
    applyMiddleware(...middlewares),
    compose(
    applyMiddleware(middleware),
    offline(offlineConfig)
    )
  );
}