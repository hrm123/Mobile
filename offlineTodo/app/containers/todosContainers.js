import React, { Component  } from 'react';
import  { PropTypes  } from 'prop-types';
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
const TodosActions =  require("../../actions/todosActions");
import { bindActionCreators } from 'redux';
import {Input} from '../components/todosComps';
import {Button} from '../components/todosComps';
import {TodoList} from '../components/todosComps';
import {TabBar} from '../components/todosComps';
// import TimerMixin from 'react-timer-mixin';
// import reactMixin from 'react-mixin';
// let  styles1 = require('../../styles/common-styles.js');

export class Todos extends Component{
    constructor(props){
        super(props);
        this.submitTodo = this.submitTodo.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.setType = this.setType.bind(this);
        this.acct = this.props.acctFromRouter || {};
    };

    setType (type) {
        this.props.onSetType(type);
    };

    render(){
        const { todos : todosModel } = this.props;
        const {inputValue, todos : todosList, taskStatus : type } = todosModel;
        return(   
            <View style={{flex: 1,flexDirection: 'column'}}>
                <ScrollView keyboardShouldPersistTaps="handled" >
                    <Input  
                        inputValue={inputValue}
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
                
                <TabBar type={type} setType={this.setType}  style={{
                    backgroundColor: 'steelblue'
                }}/>
            
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

// reactMixin(Todos.prototype, TimerMixin);

Todos.propTypes = {
    todos: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
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

export default TodosAppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);


/*

let styles1 = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        },
  body: {
    flex: 9,
    backgroundColor: '#F5FCFF'
  },
   footer: {
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flex: 2,
    backgroundColor: 'powderblue'
  }
});

*/