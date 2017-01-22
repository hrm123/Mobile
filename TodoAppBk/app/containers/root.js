import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import * as TodosActions from  "../actions/todosActions";
import { bindActionCreators } from 'redux';
import Heading from '../components/Heading';
import Input from '../components/Input';

class Root extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { todos, actions } = this.props;
        return(   
                <View style={styles.container}>
                    <ScrollView style={styles.content}>
                        <Heading />
                        <Input
                            inputValue={todos.inputValue}
                            inputChange={(text) => this.inputChange(text)} />
                        
                    </ScrollView>
                </View>
        );
    }
    inputChange(inputValue) {
        console.log('Input Value: ', inputValue)
        this.setState({ inputValue })
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
    inputChange(inputValue) {
        console.log('Input Value: ', inputValue)
        this.setState({ inputValue })
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

Root.propTypes = {
    todos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

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



const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(TodosActions, dispatch)
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);