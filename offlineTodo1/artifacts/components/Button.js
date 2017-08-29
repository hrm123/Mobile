import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
class Button extends Component {
    constructor(props) {
        super(props);
        this.submitClicked = () => {
            // console.log('submitClicked')
            const { submitTodo } = this.props;
            if (submitTodo) {
                submitTodo();
            }
        };
    }
    render() {
        return (React.createElement(View, { style: styles.buttonContainer },
            React.createElement(TouchableHighlight, { underlayColor: '#efefef', style: styles.button, onPress: this.submitClicked },
                React.createElement(Text, { style: styles.submit }, "Submit"))));
    }
}
const styles = StyleSheet.create({
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
export default Button;
//# sourceMappingURL=Button.js.map