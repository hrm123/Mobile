"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var TabBarItem_1 = require("./TabBarItem");
var TabBar = function (props) {
    var tabBarItem1Data = { todoType: props.type, title: 'All', setType: function () { return props.setType('All'); } };
    var tabBarItem2Data = { todoType: props.type, title: 'Active', setType: function () { return props.setType('Active'); } };
    var tabBarItem3Data = { todoType: props.type, title: 'Complete', setType: function () { return props.setType('Complete'); } };
    return <react_native_1.View style={styles.container}>
        <TabBarItem_1["default"] {...tabBarItem1Data}/>
        <TabBarItem_1["default"] {...tabBarItem2Data}/>
        <TabBarItem_1["default"] {...tabBarItem3Data}/>
    </react_native_1.View>;
};
var styles = react_native_1.StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
});
exports["default"] = TabBar;
