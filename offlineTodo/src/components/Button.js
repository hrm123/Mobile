"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.submitClicked = function () {
            // console.log('submitClicked')
            var submitTodo = _this.props.submitTodo;
            if (submitTodo) {
                submitTodo();
            }
        };
        return _this;
    }
    Button.prototype.render = function () {
        return (<react_native_1.View style={styles.buttonContainer}>
            <react_native_1.TouchableHighlight underlayColor='#efefef' style={styles.button} onPress={this.submitClicked}>
                <react_native_1.Text style={styles.submit}>
                    Submit
                </react_native_1.Text>
            </react_native_1.TouchableHighlight>
        </react_native_1.View>);
    };
    return Button;
}(react_1.Component));
var styles = react_native_1.StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ffffff',
        width: 200,
        marginRight: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        color: '#666666',
        fontWeight: '600'
    }
});
exports["default"] = Button;
