import React from 'react'
import { mount, render, shallow } from 'enzyme'
import { Text } from 'react-native';
import renderer from 'react-test-renderer'
import TodosApp from './containers/todos'
import TodoList from './components/TodoList'
import Todo from './components/Todo'
import TodosTsTypes from './types/todoTypes'
//import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
//import * as TodosTsActions from '../src/actions/actionTypes'
import {createStore} from 'redux'
import todosReducer from './reducers/todosreducer'
import Index from './index.android';
import initialState from './reducers/initialState';
//import renderer from 'react-native-mock-render/mock';

describe('>>>T O D O S A P P -- snapshot',() => {
  let store,wrapper

  beforeEach(()=>{

      var jsdom = require('jsdom').jsdom;                   
      global.document = jsdom('');                             
      global.window = document.defaultView;  
      global.mount = mount;
      global.render = render;
      global.shallow = shallow;
      Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {         
          global[property] = document.defaultView[property];   
        }                                                      
      });    
      store = createStore(todosReducer, initialState.todos )
        //store.dispatch(TodosTsActions.(500))
      wrapper = mount( <Provider store={store}><TodosApp /></Provider> )
  })


  xit('+++capturing Snapshot of Home', () => {
        //const renderedValue =  renderer.create(<TodosApp />).toJSON()
        //expect(renderedValue).toMatchSnapshot();
        store = createStore(todosReducer, initialState.todos )
        //store.dispatch(TodosTsActions.(500))
        wrapper = mount( <Provider store={store}><TodosApp /></Provider> )
       // console.log(wrapper.debug())
    });

  xit('should render a TodoList component', () =>{
    const todosCurrent:TodosTsTypes.Todo[] =
           ["todo1", "todo2"].map((s,i) => { return { 
                                      Task: s, Complete: false,
                                      TaskId: i, taskType: 'General' 
                                    }});
    const todoListModel:TodosTsTypes.TodoListModel =
      {
        todos: todosCurrent,
        type: 'General',
        deleteTodo: jest.fn,
        toggleComplete: jest.fn

      }

    const wrapper = shallow(<TodoList {...todoListModel} />);
    console.log(wrapper);
    console.log(wrapper.render());
    
  });

   it('should render a Todo component', () =>{
    const todoModel:TodosTsTypes.TodoModel =
      {
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

    const wrapper = shallow(<Todo {...todoModel} />);
    //console.log(wrapper);
    //console.log(wrapper.render());
    expect(wrapper.contains(
        <Text >
            todo1
        </Text>
    )).toBe(true);
  });


  xit('should render a TodoList container', () =>{
    let todoListObj = wrapper.find('TodoList');
    expect(todoListObj).toBeDefined();
    let todoObj = todoListObj.find('Todo');
    expect(todoObj).toBeDefined();
    //console.log(todoObj);
    //let todoTxt = todoObj.find('Text');
    //console.log(todoTxt.debug());
    console.log(wrapper.debug());
    console.log(wrapper.render());
    //console.log(todoTxt.Children());
//    expect(todoTxt.find('textinput')).toEqual("What needs to be done?");

  });


  xit('renders correctly', () => {
    const tree = renderer.create(
      <Index />
    );
    expect(tree).toBeDefined();
  });   
  
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
    });

});


describe('>>>T O D O S A P P --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<TodosApp />)
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

});
*/