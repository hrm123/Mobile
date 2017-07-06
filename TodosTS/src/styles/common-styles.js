'use strict';
exports.__esModule = true;
var react_native_1 = require("react-native");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    body: {
        flex: 9,
        backgroundColor: '#F5FCFF'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        flex: 2,
        backgroundColor: 'powderblue'
    }
});
