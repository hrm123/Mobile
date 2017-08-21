import * as React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
const TabBarItem = (props) => {
    return React.createElement(TouchableHighlight, { underlayColor: '#efefef', onPress: props.setType, style: [
            styles.item, props.selected ? styles.selected : null,
            props.border ? styles.border : null,
            props.todoType === props.title ? styles.selected : null
        ] },
        React.createElement(Text, { style: [styles.itemText, props.todoType === props.title ? styles.bold : null] }, props.title));
};
const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#dddddd'
    },
    itemText: {
        color: '#777777',
        fontSize: 16
    },
    selected: {
        backgroundColor: '#ffffff'
    },
    bold: {
        fontWeight: 'bold'
    }
});
export default TabBarItem;
//# sourceMappingURL=TabBarItem.js.map