import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';
import * as TodosTsTypes from '../types/todoTypes';

const TodoList : React.StatelessComponent<TodosTsTypes.TodoListModel> = props => {
    const getVisibleTodos = (todos: TodosTsTypes.Todo[], type: string): TodosTsTypes.Todo[] => {
        switch (type) {
            case 'All':
                return todos;
            case 'Complete':
                return todos.filter( (t) => t.Complete);
            case 'Active':
                return todos.filter( (t) => !t.Complete);
            default:
                return todos;

        }
    }

    const todoElements = (getVisibleTodos(props.todos, props.type)|| [] ).map((todo1) => {
            const todoModel = {
                key : todo1.TaskId,
                todo: todo1,
                toggleComplete: props.toggleComplete,
                deleteTodo: props.deleteTodo
            }

            return (
                <Todo {...todoModel} />
            )
        });

        return (
        <View>
            {todoElements}
        </View>
    );

}
export default TodoList;