import { AsyncStorage } from 'react-native' // we need to import AsyncStorage to use as a storage engine
import { createStore, applyMiddleware } from 'redux'
// import { autoRehydrate, persistStore } from 'redux-persist'
import rootReducer from './index'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'
import { createLogger} from 'redux-logger'
import * as EnvironmentDetails from '../../setup/environment'

const configureStore = (onComplete) => {
    const logger = createLogger({})
    const middlewares = [thunk ]
    if ( EnvironmentDetails.env === 'DEV') {
        middlewares.push(logger)
    }
    middlewares.push(promise)
    const store =  composeWithDevTools(
      applyMiddleware(...middlewares)
      // , autoRehydrate()
    ) (createStore)(rootReducer)
    // persistStore(store, { storage: AsyncStorage }, onComplete).purge()
    return store
}

export default configureStore