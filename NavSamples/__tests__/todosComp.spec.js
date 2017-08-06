import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {TodoList, Todo, TabBar,
  TabBarItem, TodoButton, Input} from '../src/screens/components/todosComps';
import initialState from '../src/reducers/initialState';

describe('TodoList component tests', () =>{

  it('renders correctly', () => {
    const component = renderer.create(
      <TodoList 
          todos={initialState.todos.todos}  
          toggleComplete={jest.fn()}
          deleteTodo={jest.fn()}
          type={'All'}/>
    );
    expect(component).toBeTruthy();
  });


});



describe('Todo component tests', () =>{

  it('renders correctly', () => {
    let todoModel = {
      deleteTodo : jest.fn(),
      toggleComplete : jest.fn(),
      todo : {
        Complete: false,
        Task : 'todo1',
        taskId: 1,
        taskType: 'General'
      }

    };
    const component = renderer.create(
      <Todo 
        {...todoModel}
          />
    );
    expect(component).toBeTruthy();
  });


});


describe('TodoButton component tests', () =>{

  it('renders correctly', () => {
    let todoButtonModel = {name: 'Done',
     onPress: jest.fn(), complete : false};
    const component = renderer.create(
      <TodoButton {...todoButtonModel} />
    );
    expect(component).toBeTruthy();
  });


});


describe('Input component tests', () =>{

  it('renders correctly', () => {
    let inputModel = {
        inputValue: 'todo1',
        inputChange: jest.fn()
    };
    const component = renderer.create(
      <Input 
        {...inputModel}
          />
    );
    expect(component).toBeTruthy();
  });


});


describe('TabBar component tests', () =>{

  it('renders correctly', () => {
    let tabbarModel = {
      setType: jest.fn(),
      type: ""
    };
    const component = renderer.create(
      <TabBar 
        {...tabbarModel}
          />
    );
    expect(component).toBeTruthy();
  });


});



describe('TabBar component tests', () =>{

  it('renders correctly', () => {
    let tabBarItemModel = {
      title: 'title1',
      setType: jest.fn(),
      todoType: 'All'    
    };
    const component = renderer.create(
      <TabBarItem 
        {...tabBarItemModel}
          />
    );
    expect(component).toBeTruthy();
  });


});
