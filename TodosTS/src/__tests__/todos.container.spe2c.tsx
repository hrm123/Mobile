import React from 'react'
import { mount, shallow } from 'enzyme'
import { TextInput, TouchableHighlight } from 'react-native'
import { Provider } from 'react-redux'
import * as TodoContainer from '../containers/todos'
import * as TodosTsTypes from '../types/todoTypes'
import * as Mocks from './mocks'
import TodoList from '../components/TodoList'
// import TodoComponent from '../components/Todo'
import Input from '../components/Input'
import Button from '../components/Button'
// import sinon from 'sinon'
require('react-native-mock-render/mock')

describe('>>>T O D O S CONTAINER -- tests', () => {
    let wrapper
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

    let dummyFns = {
        onSetTypeMock : jest.fn((type1: any) => {
            console.log(type1)
        }),
        onSubmitClickMock : jest.fn((todo: TodosTsTypes.Todo) => {
            console.log(todo)
        }),
        onTitleChangeMock : jest.fn((newVal: string) => {
            console.log(newVal)
        })
    }
    /*
    let dummyFns = {
        onSetTypeMock : sinon.stub(), // jest.fn(),
        onSubmitClickMock : sinon.stub(), // jest.fn(),
        onTitleChangeMock : sinon.stub() // jest.fn()
    }
    */

    let currentTodos: TodosTsTypes.Todo[] = [
        {
        Complete: false,
        Task: 'task1',
        TaskId: 1,
        taskType: 'Career'
        },
        {
        Complete: false,
        Task: 'task2',
        TaskId: 2,
        taskType: 'Personal'
        }
    ]
    let todoContainerModel: TodoContainer.ITodosProps = {
        onSetType: dummyFns.onSetTypeMock,
        onSubmitClick: dummyFns.onSubmitClickMock,
        onDeleteTask: dummyFns.onSubmitClickMock,
        onTitleChanged: dummyFns.onTitleChangeMock,
        onTaskChanged: dummyFns.onSubmitClickMock,
        todos: {
            todos: currentTodos,
            inputValue: 'todo1',
            taskType: 'general',
            taskStatus: 'pending',
            maxTodoIndex: 0
        }
    }
    beforeEach(() => {
        let jsdom = require('jsdom').jsdom
        global.document = jsdom('')
        global.window = document.defaultView
        // global.mount = mount
        // global.render = mockRend
        global.shallow = shallow
        Object.keys(document.defaultView).forEach((property) => {
            if (typeof global[property] === 'undefined') {
                global[property] = document.defaultView[property]
            }
        })
        let store = Mocks.mockStore
        wrapper = mount(<Provider store={store}><TodoContainer.TodosAppConnected {...todoContainerModel} /></Provider>)
    })

    xit('should render a Todo container', () => {
        //console.log(wrapper)
        // console.log(wrapper.render())
        expect(wrapper).toBeTruthy()
        let todoApp = wrapper.find(TodoContainer.TodosAppConnected)
        expect(todoApp.props()).toEqual(todoContainerModel)

        expect(todoApp).toHaveLength(1)
        let todoList = wrapper.find(TodoList)
        expect(todoList).toHaveLength(1)
        // console.log(wrapper.debug())
        let textInputComponent = wrapper.find(Input)
        // console.log(textInputComponent)
        expect(textInputComponent.props().inputValue).toEqual('My first todo')
        //console.log(textInputComponent.debug())
        // let textInputComponentWrapper = new ReactWrapper(textInputComponent.node.refs[refName], wrapper)
        // expect(textInputComponent.state('text')).toEqual('My first todo')
        // console.log(textInputComponent.props().inputChange)
        //expect(textInputComponent.props().inputChange).toEqual(fnOnChangeTitle)
        let textInput = textInputComponent.find(TextInput)
        //console.log(textInput.debug())
        expect(textInput).toHaveLength(1)
        expect(textInput.props().value).toEqual('My first todo')
        // textInput.simulate('ChangeText', 'a') Textinput simulate not working for events I tested
        // textInput.simulate('onChange', {target: {value: 'a'}})
        // textInput.simulate('update', 'a')
        //expect(textInput.props().value).toEqual('a')
        // dummyFns.onTitleChangeMock('a')
        // expect(dummyFns.onTitleChangeMock).toBeCalledWith('a')
        // expect(dummyFns.onSetTypeMock).toBeCalledWith('a')
        // expect(dummyFns.onSubmitClickMock).toBeCalledWith('a')

        let submitButton = wrapper.find(Button)
        expect(submitButton).toBeTruthy()
        expect(submitButton).toHaveLength(1)
        expect(submitButton.props().submitTodo).toEqual(dummyFns.onSubmitClickMock)

        let submitTH = submitButton.find(TouchableHighlight)
        console.log(submitTH.props().onPress)
        submitTH.simulate('click')
        expect(dummyFns.onSubmitClickMock).toBeCalled()
        /*
        const initialTodos: TodosTsTypes.Todo[] = []
        const initialTodosState: TodosTsTypes.TodosState = {
            todos: initialTodos,
            inputValue: 'My first todo',
            taskType: 'General',
            taskStatus: 'All',
            maxTodoIndex: 0
        }
        */
        //expect(todoList.props()).toEqual(todoContainerModel)

    })

})