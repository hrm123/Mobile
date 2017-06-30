import React from 'react'
import { mount, render, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import Todo from '../containers/todos'
import * as TodosTsTypes from '../types/todoTypes'
import * as Mocks from './mocks'
import TodoList from '../components/TodoList'
describe('>>>T O D O S CONTAINER -- tests', () => {
    let wrapper
    let fn2 = jest.fn()  // (taskId: number) => { console.log(taskId)}
    // let onPress: TodosTsTypes.PressFn = () => { console.log('onPress called')}
    let currentTodos: TodosTsTypes.Todo[] = []
    let todoContainerModel: any = {
        onSetType: fn2,
        onSubmitClick: fn2,
        onDeleteTask: fn2,
        onTitleChanged: fn2,
        onTaskChanged: fn2,
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
        wrapper = mount(<Provider store={store}><Todo {...todoContainerModel} /></Provider>)
    })

    it('should render a Todo container', () => {
        //console.log(wrapper)
        //console.log(wrapper.render())
        expect(wrapper).toBeTruthy()
        let todoApp = wrapper.find(Todo)
        expect(todoApp.props()).toEqual(todoContainerModel)

        expect(todoApp).toHaveLength(1)
        let todoList = wrapper.find(TodoList)
        expect(todoList).toHaveLength(1)


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