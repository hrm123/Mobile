import { Component } from 'react';
//import * as React from 'react'
import { connect } from 'react-redux';
import React from 'react';
import { ScrollView, View } from 'react-native';
const todosActions = require('../actions/todosActions');
import { Input } from '../components/Input';
import Button from '../components/Button';
import TodoList from '../components/TodoList';
import TabBar from '../components/TabBar';
//import TimerMixin from 'react-timer-mixin'
import { styles } from '../styles/common-styles.js';
class TodosApp extends Component {
    constructor(props) {
        super(props);
        this.submitTodo = () => {
            // console.log('button1')
            if (this.props.todos.inputValue.match(/^\s*$/)) {
                return;
            }
            let todo = {
                'Task': this.props.todos.inputValue,
                'Complete': false,
                'taskType': 'General',
                'TaskId': -1 // will be updated in the action method
            };
            // console.log(todo)
            this.props.onSubmitClick(todo);
        };
        this.deleteTask = (taskId) => {
            const { todos: todosList } = this.props.todos;
            const currentTodo = todosList.filter((td) => td.TaskId === taskId);
            if (currentTodo && currentTodo.length === 1) {
                this.props.onDeleteTask(currentTodo[0]);
            }
        };
        this.toggleComplete = (taskId) => {
            const { todos: todosList } = this.props.todos;
            const currentTodo = todosList.filter((td) => td.TaskId === taskId);
            if (currentTodo && currentTodo.length === 1) {
                this.props.onTaskChanged(Object.assign({}, currentTodo[0], { Complete: !currentTodo[0].Complete }));
            }
        };
        //this.submitTodo = this.submitTodo.bind(this)
        this.inputChange = this.inputChange.bind(this);
        this.setType = this.setType.bind(this);
        /*
        this.state = {
            bannerSize: 'smartBannerPortrait',
        }
        this.setBannerSize = this.setBannerSize.bind(this)
        */
    }
    setType(type1) {
        this.props.onSetType(type1);
    }
    render() {
        const { inputValue: inputVal, todos: todosList, taskStatus: type } = this.props.todos;
        // console.log('test0')
        return (React.createElement(View, { style: styles.container },
            React.createElement(View, { style: styles.body },
                React.createElement(ScrollView, { style: styles.content },
                    React.createElement(Input, { inputValue: inputVal, inputChange: this.inputChange }),
                    React.createElement(TodoList, { todos: todosList, toggleComplete: this.toggleComplete, deleteTodo: this.deleteTask, type: type }),
                    React.createElement(Button, { submitTodo: this.submitTodo })),
                React.createElement(TabBar, { type: type, setType: this.setType }))));
    }
    inputChange(nv) {
        console.log('test1');
        this.props.onTitleChanged(nv);
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        // actions: bindActionCreators(TodosActions, dispatch) -- can use this
        // when you want to pass these dispatch methods to component that does not know about redux
        onSubmitClick: (todo) => {
            // console.log('in onSubmitClick')
            dispatch(todosActions.addTodos(todo));
        },
        onTitleChanged: (newVal) => {
            dispatch(todosActions.titleChanged(newVal));
        },
        onTaskChanged: (todo) => {
            dispatch(todosActions.editTodos(todo));
        },
        onDeleteTask: (todo) => {
            dispatch(todosActions.deleteTodos(todo));
        },
        onSetType: (type) => {
            dispatch(todosActions.todoTypeChanged(type));
        }
    };
};
export const TodosAppConnected = connect(mapStateToProps, mapDispatchToProps)(TodosApp);
//# sourceMappingURL=todos.js.map