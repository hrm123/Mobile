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
/*
class Input extends Component = () => (
    <View style={styles.inputContainer}>
        <TextInput
            value={inputValue}
            style={styles.input}
            placeholder="What needs to be done?"
            placeholderTextcolor="#CACACA"
            selectionColor="#666666"
            onTextChange={inputChange || } />
    </View>
)
*/
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { text: _this.props.inputValue };
        _this.onInputValChanged = _this.onInputValChanged.bind(_this);
        return _this;
    }
    Input.prototype.render = function () {
        var _this = this;
        // const { inputValue, inputChange } = this.props;
        return (<react_native_1.View style={styles.inputContainer}>
                <react_native_1.TextInput value={this.state.text} style={styles.input} placeholder='What needs to be done?' selectionColor='#666666' onChangeText={function (text) { return _this.setState({ text: text }); }} onBlur={this.onInputValChanged} onChange={function (text) { return _this.setState({ text: text }); }}/>
            </react_native_1.View>);
    };
    Input.prototype.onInputValChanged = function () {
        // console.log('In onInputValChanged')
        this.props.inputChange(this.state.text);
    };
    return Input;
}(react_1.Component));
exports.Input = Input;
var styles = react_native_1.StyleSheet.create({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 }
    },
    input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    }
});
