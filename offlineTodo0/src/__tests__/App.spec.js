"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var App_1 = require("../containers/App");
/// import { Provider } from 'react-redux'
require('react-native-mock-render/mock');
var Mocks = require("./mocks");
describe('>>> A P P -- tests', function () {
    var wrapper;
    var store = Mocks.mockStore;
    var currentState = store.getState().todos;
    beforeEach(function () {
        var jsdom = require('jsdom').jsdom;
        global.document = jsdom('');
        global.window = document.defaultView;
        // global.mount = mount
        // global.render = mockRend
        global.shallow = enzyme_1.shallow;
        Object.keys(document.defaultView).forEach(function (property) {
            if (typeof global[property] === 'undefined') {
                global[property] = document.defaultView[property];
            }
        });
        store.clearActions();
        // store.dispatch = sinon.spy()
        // console.log(store.getState())
        wrapper = enzyme_1.mount(<App_1["default"] />);
    });
    it('should render a he App', function () {
        console.log(currentState);
        expect(wrapper).toBeTruthy();
    });
});
