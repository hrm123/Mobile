"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var TabBarItem = function (props) {
    return <react_native_1.TouchableHighlight underlayColor='#efefef' onPress={props.setType} style={[
        styles.item, props.selected ? styles.selected : null,
        props.border ? styles.border : null,
        props.todoType === props.title ? styles.selected : null
    ]}>
        <react_native_1.Text style={[styles.itemText, props.todoType === props.title ? styles.bold : null]}>
            {props.title}
        </react_native_1.Text>
    </react_native_1.TouchableHighlight>;
};
var styles = react_native_1.StyleSheet.create({
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
exports["default"] = TabBarItem;
