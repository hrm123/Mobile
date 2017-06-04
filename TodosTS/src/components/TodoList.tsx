import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({todos, toggleComplete, deleteTodo , type}) => {

    const getVisibleTodos = (todos, type) => {
        switch (type) {
            case 'All':
                return todos;
            case 'Complete':
                return todos.filter( (t) => t.Complete);
            case 'Active':
                return todos.filter( (t) => !t.Complete);
        }
    }

    todos = getVisibleTodos(todos, type).map((todo, i) => {
        return (
            <Todo
                key={todo.TaskId}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
            />
        )
    });
    return (
        <View>
            {todos}
        </View>
    );
};

export default TodoList;