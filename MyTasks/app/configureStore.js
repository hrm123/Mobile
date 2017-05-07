import {createStore, applyMiddleware, compose} from 'redux';  
import rootReducer from './reducers/rootReducer';  
import thunk from 'redux-thunk';
import { offline } from 'redux-offline';
import { AddTodo,DeleteTodo } from './actions/apirequests.js';
// import offlineConfig from 'redux-offline/lib/defaults';
const actionTypes =  require('./actions/actionTypes');  

const offlineConfig = {
  effect: (effect, action) => {
      debugger;
        console.log(`Executing effect for ${action.type}`);
        switch (action.type)
        {
          case actionTypes.ADD_TODOS:
            return AddTodo(action.todo);
          case actionTypes.DELETE_TODOS:
            return DeleteTodo(action.todo);

        }
        
  }
};


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