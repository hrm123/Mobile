"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var TodoButton_1 = require("./TodoButton");
var Todo = function (props) {
    var todoButton1Data = { name: 'Done',
        complete: props.todo.Complete,
        onPress: function () { return props.toggleComplete(props.todo.TaskId); } };
    var todoButton2Data = {
        name: 'Delete',
        onPress: function () { return props.deleteTodo(props.todo.TaskId); }
    };
    return <react_native_1.View style={styles.todoContainer}>
        <react_native_1.Text>
            {props.todo.Task}
        </react_native_1.Text>

        <react_native_1.View style={styles.buttons}>
            <TodoButton_1["default"] {...todoButton1Data}/>
            <TodoButton_1["default"] {...todoButton2Data}/>
        </react_native_1.View>
    </react_native_1.View>;
};
var styles = react_native_1.StyleSheet.create({
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
    },
    todoText: {
        fontSize: 17
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});
exports["default"] = Todo;
