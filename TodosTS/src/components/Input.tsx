import React, {Component} from 'react'
import {View, StyleSheet, TextInput, ViewStyle} from 'react-native'

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

export interface IInputProps {
    inputValue: string,
    inputChange: (string) => void

}

class Input extends Component<IInputProps, any>{
    constructor(props: IInputProps){
        super(props)
        this.state = {text : ''}
        this.onInputValChanged = this.onInputValChanged.bind(this)
    }

    render(){
        //const { inputValue, inputChange } = this.props;
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    value={this.state.text}
                    style={styles.input}
                    placeholder='What needs to be done?'
                    //placeholderTextcolor="#CACACA"
                    //selectionColor="#666666"
                    //onChangeText={ (text) => this.setState({text})}
                    onBlur={this.onInputValChanged}
                    onChange={ (text) => this.setState({text})}
                    />
            </View>
        )
    }

    onInputValChanged(){
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

export default Input