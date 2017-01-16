import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import Heading from './Heading';
import Input from './Input';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: "",
            todos: [],
            type: 'All'
        }
    }
    inputChange(inputValue) {
        console.log('Input Value: ', inputValue)
        this.setState({ inputValue })
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <Heading />
                    <Input
                        inputValue={this.state.inputValue}
                        inputChange={(text) => this.inputChange(text)} />
                    
                </ScrollView>
            </View>
        );
    }
    submitTodo () {
        if(this.state.inputValue.match(/^\s*$/)){
            return;
        }
        let todo = {
            title: this.state.inputValue,
            todoindex: todoIindex,
            complete: false
        }
        todoIndex++;
        this.state.todos.push(todo);
        this.setState({ todos: this.state.todos, inputValue: ''}, 
            () => console.log('State:', this.state));

    }
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: "#f5f5f5"
    },
    content :{
        flex: 1,
        paddingTop: 60
    }
});

export default App;