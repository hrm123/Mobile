"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var TodoButton = function (props) {
    return (<react_native_1.TouchableHighlight onPress={props.onPress} underlayColor='#efefef' style={styles.button}>
            <react_native_1.Text style={[
        styles.text,
        props.complete ? styles.complete : null,
        props.name === 'Delete' ? styles.deleteButton : null
    ]}>
                {props.name}
            </react_native_1.Text>
        </react_native_1.TouchableHighlight>);
};
var styles = react_native_1.StyleSheet.create({
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
exports["default"] = TodoButton;
