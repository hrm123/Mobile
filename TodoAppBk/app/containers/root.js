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
import Button from '../components/Button';

class Root extends Component{
    constructor(props){
        super(props);
        this.submitTodo = this.submitTodo.bind(this);
    }

    render(){
        const { todos } = this.props;
        return(   
                <View style={styles.container}>
                    <ScrollView style={styles.content}>
                        <Heading />
                        <Input
                            inputValue={todos.inputValue}
                            inputChange={(text) => this.inputChange(text)} />
                        <Button submitTodo={this.submitTodo} />
                    </ScrollView>
                </View>
        );
    }
    submitTodo = () => {
        debugger;
        if(this.props.todos.inputValue.match(/^\s*$/)){
            return;
        }
        let todo = {
            "Task": this.props.todos.inputValue,
            "Complete": false,
            "TaskType": "General",
             "TaskId": this.props.todos.maxTodoIndex++
        }

        this.props.onSubmitClick(todo);
        /*
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
            */

    }
    inputChange = (inputValue) =>  {
        console.log('Input Value: ', inputValue)
        //this.setState({ inputValue })
    }
}

Root.propTypes = {
    todos: PropTypes.object.isRequired
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
    debugger;
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    debugger;
    return {
        //actions: bindActionCreators(TodosActions, dispatch) -- can use this when you want to pass these dispatch methods to component that does not know about redux
        onSubmitClick: (todo) => {
            dispatch(TodosActions.addTodos(todo));
        } 
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);