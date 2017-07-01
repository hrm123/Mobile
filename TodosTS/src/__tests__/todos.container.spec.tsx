import React from 'react'
import { mount, render, shallow } from 'enzyme'
import {TextInput} from 'react-native'
import { Provider } from 'react-redux'
import * as TodoContainer from '../containers/todos'
import * as TodosTsTypes from '../types/todoTypes'
import * as Mocks from './mocks'
import TodoList from '../components/TodoList'
import TodoComponent from '../components/Todo'
import Input from '../components/Input'
// import sinon from 'sinon'

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
        onSetTypeMock : jest.fn(),
        onSubmitClickMock : jest.fn(),
        onTitleChangeMock : jest.fn()
    }

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
        TaskId: 1,
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
        global.mount = mount
        global.render = render
        global.shallow = shallow
        Object.keys(document.defaultView).forEach((property) => {
            if (typeof global[property] === 'undefined') {
                global[property] = document.defaultView[property]
            }
        })
        let store = Mocks.mockStore
        wrapper = mount(<Provider store={store}><TodoContainer.TodosAppConnected {...todoContainerModel} /></Provider>)
    })

    it('should render a Todo container', () => {
        //console.log(wrapper)
        //console.log(wrapper.render())
        expect(wrapper).toBeTruthy()
        let todoApp = wrapper.find(TodoContainer.TodosAppConnected)
        expect(todoApp.props()).toEqual(todoContainerModel)

        expect(todoApp).toHaveLength(1)
        let todoList = wrapper.find(TodoList)
        expect(todoList).toHaveLength(1)

        let textInputComponent = wrapper.find(Input)
        //console.log(textInputComponent)
        expect(textInputComponent.props().inputValue).toEqual('My first todo')
        console.log(textInputComponent.props().inputChange)
        //expect(textInputComponent.props().inputChange).toEqual(fnOnChangeTitle)
        let textInput = textInputComponent.find(TextInput)
        textInput.simulate('keypress', {which: 'a'})
        //dummyFns.onTitleChangeMock('a')
        expect(dummyFns.onTitleChangeMock).toBeCalledWith('a')
        // expect(dummyFns.onSetTypeMock).toBeCalledWith('a')
        // expect(dummyFns.onSubmitClickMock).toBeCalledWith('a')

        let todoComponents = wrapper.find(TodoComponent)
        expect(todoComponents).toBeTruthy()
        //expect(todoComponents).toHaveLength(2)


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