import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  TouchableHighlight,
  Text
} from 'react-native';
const TodosActions =  require("../actions/todosActions");
import { bindActionCreators } from 'redux';
import Header from './header';
import Footer from './footer';
import Input from '../components/Input';
import Button from '../components/Button';
import TodoList from '../components/TodoList';
import TabBar from '../components/TabBar';
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';
import styles from '../styles/common-styles.js';
import firebase from 'firebase';

class Todos extends Component{
    constructor(props){
        super(props);
        this.submitTodo = this.submitTodo.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.setType = this.setType.bind(this);
        debugger;
        this.acct = this.props.acctFromRouter || {};
        /*
        this.state = {
            bannerSize: 'smartBannerPortrait',
        };
        this.setBannerSize = this.setBannerSize.bind(this);
        */
    };

    setType (type) {
        this.props.onSetType(type);
    };

    render(){
        const { todos } = this.props;
        
        const {inputVal, todos : todosList, taskStatus : type } = todos;
        return(   
                <View style={styles.container}>
                    <Header/>
                    <View style={styles.body}>
                        <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
                            <Input
                                inputValue={inputVal}
                                inputChange={this.inputChange}
                            /> 
                            <TodoList 
                                todos={todosList}  
                                toggleComplete={this.toggleComplete}
                                deleteTodo={this.deleteTask}
                                type={type}
                            />
                            <Button submitTodo={this.submitTodo} />
                        </ScrollView>
                        <TabBar type={type} setType={this.setType} />
                    </View>
                    <Footer isLoginAllowed={false} isSignupAllowed={false}/>
                </View>
        );
    };

    submitTodo = () => {
        if(this.props.todos.inputValue.match(/^\s*$/)){
            return;
        }
        let todo = {
            "Task": this.props.todos.inputValue,
            "Complete": false,
            "taskType": "General",
             "TaskId": -1 // will be updated in the action method
        }
        const {userName} = this.props;
        if(userName.length >0){
            const ref = firebase.database().ref("/");
            const userRef= ref.child(userName.replace("@","_").replace(".","-"));
            const todosRef = userRef.child("todos");            
            todosRef.set([todo]);
        }
        
        this.props.onSubmitClick(todo);
    };

    deleteTask = (taskId) => {
        const { todos : todosList } = this.props.todos;
        const currentTodo = todosList.filter((td) => td.TaskId===taskId);
        if(currentTodo && currentTodo.length ===1){
            this.props.onDeleteTask(currentTodo[0]);
        }
    };

    toggleComplete = (taskId) => {
        const { todos : todosList } = this.props.todos;
        const currentTodo = todosList.filter((td) => td.TaskId===taskId);
        if(currentTodo && currentTodo.length ===1){
            this.props.onTaskChanged({TaskId: currentTodo[0].TaskId , Complete:!currentTodo[0].Complete});
        }
    };

    inputChange(nv){
        this.props.onTitleChanged(nv);
    };
}

reactMixin(Todos.prototype, TimerMixin);

Todos.propTypes = {
    todos: PropTypes.object.isRequired
};

/*
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
*/



const mapStateToProps = (state) => {
    debugger;
  return {
    todos: state.todos
  }

};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //actions: bindActionCreators(TodosActions, dispatch) -- can use this when you want to pass these dispatch methods to component that does not know about redux
        onSubmitClick: (todo) => {
            dispatch(TodosActions.addTodos(todo));
        },
        onTitleChanged:  (newVal) =>{
            dispatch(TodosActions.titleChanged(newVal));
        },
        onTaskChanged: (todo) => {
            dispatch(TodosActions.editTodos(todo));
        },
        onDeleteTask: (todo) => {
            dispatch(TodosActions.deleteTodos(todo));
        },
        onSetType: (type) =>{
            dispatch(TodosActions.todoTypeChanged(type));
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);