import { AsyncStorage } from 'react-native'; // we need to import AsyncStorage to use as a storage engine
import { createStore, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createLogger } from 'redux-logger';
// import promise from 'redux-promise'
import * as EnvironmentDetails from './environment';
const configureStore = (onComplete) => {
    const logger = createLogger({});
    const middlewares = [thunk];
    if (EnvironmentDetails.env === 'dev') {
        middlewares.push(logger);
    }
    // middlewares.push(promise)
    const store = composeWithDevTools(applyMiddleware(...middlewares), autoRehydrate())(createStore)(rootReducer);
    persistStore(store, { storage: AsyncStorage }, onComplete).purge();
    return store;
};
export default configureStore;
//# sourceMappingURL=configureStore.js.map