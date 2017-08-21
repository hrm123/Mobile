import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
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
export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.inputValue };
        this.onInputValChanged = this.onInputValChanged.bind(this);
    }
    render() {
        // const { inputValue, inputChange } = this.props;
        return (React.createElement(View, { style: styles.inputContainer },
            React.createElement(TextInput, { value: this.state.text, style: styles.input, placeholder: 'What needs to be done?', selectionColor: '#666666', onChangeText: (text) => this.setState({ text }), onBlur: this.onInputValChanged, onChange: (text) => this.setState({ text }) })));
    }
    onInputValChanged() {
        // console.log('In onInputValChanged')
        this.props.inputChange(this.state.text);
    }
}
const styles = StyleSheet.create({
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
//# sourceMappingURL=Input.js.map