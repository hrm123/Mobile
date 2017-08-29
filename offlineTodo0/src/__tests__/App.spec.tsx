import React from 'react'
import { mount, shallow} from 'enzyme'
import App from '../containers/App'
/// import { Provider } from 'react-redux'
require('react-native-mock-render/mock')
import * as Mocks from './mocks'

let global: any

describe('>>> A P P -- tests', () => {
    let wrapper
    let store = Mocks.mockStore
    let currentState = store.getState().todos

    beforeEach(() => {
        let jsdom = require('jsdom').jsdom
        global.document = jsdom('')
        global.window = document.defaultView
        global.mount = mount
        // global.render = mockRend
        global.shallow = shallow
        Object.keys(document.defaultView).forEach((property) => {
            if (typeof global[property] === 'undefined') {
                global[property] = document.defaultView[property]
            }
        })
        store.clearActions()
        // store.dispatch = sinon.spy()
        // console.log(store.getState())
        wrapper = mount(<App/>)
    })

    it('should render a the App', () => {
        console.log(currentState)
        expect(wrapper).toBeTruthy()
    })

})