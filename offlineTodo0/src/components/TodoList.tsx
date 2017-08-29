import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';
import * as TodosTsTypes from '../types/todoTypes';

const TodoList : React.StatelessComponent<TodosTsTypes.TodoListModel> = props => {
    
    const todoElements = (props.todos|| [] ).map((todo1) => {
            const todoModel: TodosTsTypes.TodoModel = {
                key : todo1.TaskId,
                todo: todo1,
                toggleComplete: props.toggleComplete,
                deleteTodo: props.deleteTodo,
                reopenTodo: props.reopenTodo,
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