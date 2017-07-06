"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var Input_1 = require("../components/Input");
var react_native_1 = require("react-native");
// import sinon from 'sinon'
describe('>>>Input COMPONENT -- tests', function () {
    var wrapper;
    // let Mock = jest.fn((val: string) => {console.log(val) })
    // const inputChangeMock = new Mock()
    var mockFn = jest.fn();
    var inputModel = {
        inputValue: 'todo1',
        inputChange: mockFn
    };
    beforeEach(function () {
        var jsdom = require('jsdom').jsdom;
        global.document = jsdom('');
        global.window = document.defaultView;
        global.mount = enzyme_1.mount;
        global.render = enzyme_1.render;
        global.shallow = enzyme_1.shallow;
        Object.keys(document.defaultView).forEach(function (property) {
            if (typeof global[property] === 'undefined') {
                global[property] = document.defaultView[property];
            }
        });
        wrapper = enzyme_1.mount(<Input_1.Input {...inputModel}/>);
    });
    it('should render a Input component with correct props and state', function () {
        var inputComponent = wrapper.find(Input_1.Input);
        // console.log(inputComponent.debug())
        expect(inputComponent.props().inputValue).toEqual('todo1');
        expect(inputComponent.props().inputChange).toEqual(inputModel.inputChange);
        expect(wrapper.state('text')).toEqual('todo1');
    });
    it('should invoke inputChange function', function () {
        expect(wrapper).toBeTruthy();
        var inputComponent = wrapper.find(Input_1.Input);
        var inputTextField = inputComponent.find(react_native_1.TextInput);
        expect(inputTextField).toBeTruthy();
        expect(inputTextField).toHaveLength(1);
        // console.log(inputTextField.debug())
        inputTextField.prop('onChange')('todo2'); // Invoke onchange event to change text to todo2
        expect(wrapper.state('text')).toEqual('todo2');
        inputTextField.prop('onBlur')(); // Invoke onBlur event
        expect(mockFn).toBeCalledWith('todo2');
    });
});
