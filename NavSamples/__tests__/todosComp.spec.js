import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {TodoList} from '../src/screens/components/todosComps';
import initialState from '../src/reducers/initialState';

it('renders correctly', () => {
  console.log(initialState);
  /*
  initialState.todos.todos = [
    {
        Complete: false,
        Task: 'todo1',
        TaskId: 1,
        taskType: 'General'
    }
  ];
  */
  const tree = renderer.create(
    <TodoList 
        todos={initialState.todos.todos}  
        toggleComplete={jest.fn()}
        deleteTodo={jest.fn()}
        type={'All'}/>
  );
});