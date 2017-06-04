import * as React from 'react';
import { ViewStyle, Text, TouchableHighlight, StyleSheet } from 'react-native';
import * as TodosTsTypes from '../types/todoTypes';

const TodoButton : React.StatelessComponent<TodosTsTypes.TodoButtonModel> = props => {
    return (
        <TouchableHighlight
            onPress={props.onPress}
            underlayColor='#efefef'
            style={styles.button}
        >
            <Text style={[
                styles.text,
                props.complete ? styles.complete : null,
                props.name === 'Delete' ? styles.deleteButton : null ]}
            >
                {props.name}
            </Text>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5
    } as ViewStyle,
    text: {
        color: '#666666'
    } as ViewStyle,
    complete: {
        color: 'green',
        fontWeight: 'bold'
    } as ViewStyle,
    deleteButton: {
        color: 'rgba(175, 47, 47, 1)'
    } as ViewStyle
});

export default TodoButton;