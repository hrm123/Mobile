import React, {Component} from 'react'
import {View, StyleSheet, TextInput, ViewStyle} from 'react-native'
import * as TodosTsTypes from '../types/todoTypes'

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



export class Input extends Component<TodosTsTypes.IInputProps, any> {
    constructor(props: TodosTsTypes.IInputProps) {
        super(props)
        this.state = {text : this.props.inputValue}
        this.onInputValChanged = this.onInputValChanged.bind(this)
    }

    render() {
        // const { inputValue, inputChange } = this.props;
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    value={this.state.text}
                    style={styles.input}
                    placeholder='What needs to be done?'
                    selectionColor='#666666'
                    onChangeText={ (text) => this.setState({text})}
                    onBlur={this.onInputValChanged}
                    onChange={ (text) => this.setState({text})}
                    />
            </View>
        )
    }

    onInputValChanged() {
        // console.log('In onInputValChanged')
        this.props.inputChange(this.state.text)
    }
}

const styles = StyleSheet.create<any>({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 }
    } as ViewStyle,
    input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    } as ViewStyle
})