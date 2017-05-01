import {createStore, applyMiddleware, compose} from 'redux';  
import rootReducer from './reducers/rootReducer';  
import thunk from 'redux-thunk';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';

export default function configureStore(option = {}) {  
  const middlewares = option.middlewares || [thunk];
  const {persistedState} = option;
  //TODO: check option.middlewares is an array
  return createStore(
    rootReducer,
    persistedState || {},
    compose(
    applyMiddleware(...middlewares),
    offline(offlineConfig)
    )
  );
}