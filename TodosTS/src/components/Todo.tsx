import React from 'react';
import { ViewStyle, View, Text, StyleSheet } from 'react-native';
import TodoButton from "./TodoButton";
import * as TodosTsTypes from '../types/todoTypes';

const Todo : React.StatelessComponent<TodosTsTypes.TodoModel> = props => {
    const todoButton1Data: TodosTsTypes.TodoButtonModel = { name: 'Done',
                complete: props.todo.Complete,
                onPress: () => props.toggleComplete(props.todo.TaskId) }
    const todoButton2Data: TodosTsTypes.TodoButtonModel = {
        name: 'Delete',
        onPress : () => props.deleteTodo(props.todo.TaskId)
    }
    return <View style={styles.todoContainer}>
        <Text>
            {props.todo.Task}
        </Text>

        <View style={styles.buttons}>
            <TodoButton {...todoButton1Data} />
            <TodoButton {...todoButton2Data} />
        </View>
    </View>
}
const styles = StyleSheet.create({
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        flexDirection: 'row',
        alignItems: 'center'
    } as ViewStyle,
    todoText: {
        fontSize: 17
    } as ViewStyle,
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    } as ViewStyle
});

export default Todo;