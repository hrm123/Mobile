import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View,
  TextInput
} from 'react-native';
const TodosActions =  require("../actions/todosActions");
import { bindActionCreators } from 'redux';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import TodoList from '../components/TodoList';

class Root extends Component{
    constructor(props){
        super(props);
        this.submitTodo = this.submitTodo.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    render(){
        const { todos } = this.props;
        const {inputVal, todos : todosList } = todos;
        debugger;
        return(   
                <View style={styles.container}>
                    <ScrollView style={styles.content}>
                        <Heading />
                        <Input
                            inputValue={inputVal}
                            inputChange={this.inputChange}
                             /> 
                            <TodoList todos={todosList} />
                        <Button submitTodo={this.submitTodo} />
                    </ScrollView>
                </View>
        );
    }
    submitTodo = () => {
        if(this.props.todos.inputValue.match(/^\s*$/)){
            return;
        }
        let todo = {
            "Task": this.props.todos.inputValue,
            "Complete": false,
            "TaskType": "General",
             "TaskId": -1 // will be updated in tthe action method
        }

        this.props.onSubmitClick(todo);
    }
    inputChange(nv){
        console.log('Input Value: ', nv);
        this.props.onTitleChanged(nv);
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
        },
        onTitleChanged:  (newVal) =>{
            dispatch(TodosActions.titleChanged(newVal));
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);