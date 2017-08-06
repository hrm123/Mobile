import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import initialState from '../src/reducers/initialState'

const middlewares = [ thunk ]
export const mockStore = configureMockStore(middlewares)(initialState)