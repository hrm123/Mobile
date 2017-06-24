import React from 'react'
import { mount, render, shallow } from 'enzyme'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'
import Todo from '../components/Todo'
import TodoButton from '../components/TodoButton'
import TodosTsTypes from '../types/todoTypes'

describe('>>>T O D O S COMPONENT -- tests', () => {
    let wrapper
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
      const todoModel: TodosTsTypes.TodoModel = {
          deleteTodo: jest.fn,
          toggleComplete: jest.fn,
          key: 1,
          todo: {
              Complete: false,
              Task: 'todo1',
              TaskId: 1,
              taskType: 'General'
          }
      }
      wrapper = shallow(<Todo {...todoModel} />)
    })

    it('should render a Todo component', () => {
        //console.log(wrapper)
        console.log(wrapper.render())
        expect(wrapper.contains(
            <Text >
                todo1
            </Text>
        )).toBe(true)
    })

    it('should render a Todo component using SnapShots', () => {
        const todoModel: TodosTsTypes.TodoModel = {
          deleteTodo: jest.fn,
          toggleComplete: jest.fn,
          key: 1,
          todo: {
            Complete: false,
            Task: 'todo1',
            TaskId: 1,
            taskType: 'General'
          }
        }

        expect(renderer.create(
          <Todo {...todoModel} />
        )).toMatchSnapshot()
    })

    describe('Todo component button tests', () => {
        it('Todo component button tests', () => {
            let todoButtons = wrapper.find(TodoButton)
            expect(todoButtons).toHaveLength(2)
            console.log(todoButtons)
            let button1State: TodosTsTypes.TodoButtonModel = {name: 'Delete', onPress: jest.fn, complete : false};
            expect(todoButtons[0].state()).toEqual(button1State)
        })
    })

    xit('should render a TodoList container', () => {
        let todoListObj = wrapper.find('TodoList')
        expect(todoListObj).toBeDefined()
        let todoObj = todoListObj.find('Todo')
        expect(todoObj).toBeDefined()
        //console.log(todoObj)
        //let todoTxt = todoObj.find('Text')
        //console.log(todoTxt.debug())
        console.log(wrapper.debug())
        console.log(wrapper.render())
        //console.log(todoTxt.Children())
        //    expect(todoTxt.find('textinput')).toEqual("What needs to be done?")
    })
})

/*

describe('>>>T O D O S A P P -- REACT-REDUX (actual Store + reducers) more of Integration Testing',()=>{
    //const initState = initialState
    let store,wrapper

    beforeEach(()=>{
        store = createStore(todosReducer)
        wrapper = mount( <Provider store={store}><TodosApp /></Provider> )
    })

    it('+++ check Prop matches with initialState', () => {
        //store.dispatch(addInputs(500))
       expect(wrapper.find(TodosApp).prop('todos.inputValue')).toBe('My first todo')
    })

})

describe('>>>T O D O S A P P --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<TodosApp />)
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    })

})
*/