import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {TodoList} from '../components/todosComps';
import initialState from '../src/reducers/initialState';

it('renders correctly', () => {
  const tree = renderer.create(
    <TodoList 
        todos={initialState.todos.todos}  
        toggleComplete={jest.fn()}
        deleteTodo={jest.fn()}
        type={'General'}/>
  );
});