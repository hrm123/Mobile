import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';
const TodoList = props => {
    const getVisibleTodos = (todos, type) => {
        switch (type) {
            case 'All':
                return todos;
            case 'Complete':
                return todos.filter((t) => t.Complete);
            case 'Active':
                return todos.filter((t) => !t.Complete);
            default:
                return todos;
        }
    };
    const todoElements = (getVisibleTodos(props.todos, props.type) || []).map((todo1) => {
        const todoModel = {
            key: todo1.TaskId,
            todo: todo1,
            toggleComplete: props.toggleComplete,
            deleteTodo: props.deleteTodo
        };
        return (React.createElement(Todo, Object.assign({}, todoModel)));
    });
    return (React.createElement(View, null, todoElements));
};
export default TodoList;
//# sourceMappingURL=TodoList.js.map