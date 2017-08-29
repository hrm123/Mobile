"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var TodoContainer = require("../containers/todos");
var Mocks = require("./mocks");
var TodoList_1 = require("../components/TodoList");
// import TodoComponent from '../components/Todo'
var Input_1 = require("../components/Input");
var Button_1 = require("../components/Button");
// import sinon from 'sinon'
require('react-native-mock-render/mock');
var TodosActionsTypes = require("../actions/actionTypes");
describe('>>> T O D O S CONTAINER -- tests', function () {
    var wrapper;
    /*
    let dummyFns = {
        onSetTypeMock : (type1: any) => {
            console.log(type1)
        },
        onSubmitClickMock : (todo: TodosTsTypes.Todo) => {
            console.log(todo)
        },
        onTitleChangeMock : (newVal: string) => {
            console.log(newVal)
        }
    }
    jest.spyOn(dummyFns, 'onSetTypeMock')
    jest.spyOn(dummyFns, 'onSubmitClickMock')
    jest.spyOn(dummyFns, 'onTitleChangeMock')
    */
    var dummyFns = {
        onSetTypeMock: jest.fn(function (type1) {
            console.log(type1);
        }),
        onSubmitClickMock: jest.fn(function (todo) {
            console.log(todo);
        }),
        onTitleChangeMock: jest.fn(function (newVal) {
            console.log(newVal);
        })
    };
    var store = Mocks.mockStore;
    var currentState = store.getState().todos;
    var todoContainerModel = {
        onSetType: dummyFns.onSetTypeMock,
        onSubmitClick: dummyFns.onSubmitClickMock,
        onDeleteTask: dummyFns.onSubmitClickMock,
        onTitleChanged: dummyFns.onTitleChangeMock,
        onTaskChanged: dummyFns.onSubmitClickMock,
        todos: currentState
    };
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
        wrapper = enzyme_1.mount(<react_redux_1.Provider store={store}><TodoContainer.TodosAppConnected {...todoContainerModel}/></react_redux_1.Provider>);
    });
    it('should render a Todo container', function () {
        expect(wrapper).toBeTruthy();
        var todoApp = wrapper.find(TodoContainer.TodosAppConnected);
        expect(todoApp.props()).toEqual(todoContainerModel);
        expect(todoApp).toHaveLength(1);
        var todoList = wrapper.find(TodoList_1["default"]);
        expect(todoList).toHaveLength(1);
        var textInputComponent = wrapper.find(Input_1.Input);
        expect(textInputComponent.props().inputValue).toEqual('My first todo');
        var textInput = textInputComponent.find(react_native_1.TextInput);
        expect(textInput).toHaveLength(1);
        expect(textInput.props().value).toEqual('My first todo');
    });
    it('submit button should invoke submit callback', function () {
        var submitButton = wrapper.find(Button_1["default"]);
        expect(submitButton).toBeTruthy();
        expect(submitButton).toHaveLength(1);
        // expect(submitButton.props().submitTodo).toEqual(dummyFns.onSubmitClickMock)
        var submitTH = submitButton.find(react_native_1.TouchableHighlight);
        // console.log(submitTH.props().onPress)
        submitTH.props().onPress();
        // expect(dummyFns.onSubmitClickMock).toBeCalled()
        var actions = store.getActions();
        expect(actions[0]).toEqual({ 'todo': { Task: 'My first todo',
                Complete: false,
                taskType: 'General',
                TaskId: currentState.maxTodoIndex + 1 }, 'type': TodosActionsTypes.ADD_TODOS });
    });
});
