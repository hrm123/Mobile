import React from 'react'
import { mount, shallow } from 'enzyme'
import { TextInput, TouchableHighlight } from 'react-native'
import { Provider } from 'react-redux'
import * as TodoContainer from '../containers/todos'
import * as TodosTsTypes from '../types/todoTypes'
import * as Mocks from './mocks'
import TodoList from '../components/TodoList'
// import TodoComponent from '../components/Todo'
import {Input} from '../components/Input'
import Button from '../components/Button'
// import sinon from 'sinon'
require('react-native-mock-render/mock')
import * as TodosActionsTypes from '../actions/actionTypes'

describe('>>> T O D O S CONTAINER -- tests', () => {
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
    let store = Mocks.mockStore
    let currentState = store.getState().todos
    let todoContainerModel: TodoContainer.ITodosProps = {
        onSetType: dummyFns.onSetTypeMock,
        onSubmitClick: dummyFns.onSubmitClickMock,
        onDeleteTask: dummyFns.onSubmitClickMock,
        onTitleChanged: dummyFns.onTitleChangeMock,
        onTaskChanged: dummyFns.onSubmitClickMock,
        todos: currentState
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
        store.clearActions()
        // store.dispatch = sinon.spy()
        // console.log(store.getState())
        wrapper = mount(<Provider store={store}><TodoContainer.TodosAppConnected {...todoContainerModel} /></Provider>)
    })

    it('should render a Todo container', () => {
        expect(wrapper).toBeTruthy()
        let todoApp = wrapper.find(TodoContainer.TodosAppConnected)
        expect(todoApp.props()).toEqual(todoContainerModel)

        expect(todoApp).toHaveLength(1)
        let todoList = wrapper.find(TodoList)
        expect(todoList).toHaveLength(1)
        let textInputComponent = wrapper.find(Input)
        expect(textInputComponent.props().inputValue).toEqual('My first todo')
        let textInput = textInputComponent.find(TextInput)
        expect(textInput).toHaveLength(1)
        expect(textInput.props().value).toEqual('My first todo')
    })

    it('submit button should invoke submit callback', () => {
        let submitButton = wrapper.find(Button)
        expect(submitButton).toBeTruthy()
        expect(submitButton).toHaveLength(1)
        // expect(submitButton.props().submitTodo).toEqual(dummyFns.onSubmitClickMock)

        let submitTH = submitButton.find(TouchableHighlight)
        // console.log(submitTH.props().onPress)
        submitTH.props().onPress()
        // expect(dummyFns.onSubmitClickMock).toBeCalled()
        const actions = store.getActions()
        expect(actions[0]).toEqual( { 'todo': { Task: 'My first todo',
            Complete: false,
            taskType: 'General',
            TaskId: currentState.maxTodoIndex + 1} , 'type': TodosActionsTypes.ADD_TODOS})
    })

})