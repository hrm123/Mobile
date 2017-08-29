import * as React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
const TodoButton = props => {
    return (React.createElement(TouchableHighlight, { onPress: props.onPress, underlayColor: '#efefef', style: styles.button },
        React.createElement(Text, { style: [
                styles.text,
                props.complete ? styles.complete : null,
                props.name === 'Delete' ? styles.deleteButton : null
            ] }, props.name)));
};
const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5
    },
    text: {
        color: '#666666'
    },
    complete: {
        color: 'green',
        fontWeight: 'bold'
    },
    deleteButton: {
        color: 'rgba(175, 47, 47, 1)'
    }
});
export default TodoButton;
//# sourceMappingURL=TodoButton.js.map