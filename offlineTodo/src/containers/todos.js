"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
//import * as React from 'react'
var react_redux_1 = require("react-redux");
var react_2 = require("react");
var react_native_1 = require("react-native");
var todosActions = require('../actions/todosActions');
var Input_1 = require("../components/Input");
var Button_1 = require("../components/Button");
var TodoList_1 = require("../components/TodoList");
var TabBar_1 = require("../components/TabBar");
//import TimerMixin from 'react-timer-mixin'
var common_styles_js_1 = require("../styles/common-styles.js");
var TodosApp = (function (_super) {
    __extends(TodosApp, _super);
    function TodosApp(props) {
        var _this = _super.call(this, props) || this;
        _this.submitTodo = function () {
            // console.log('button1')
            if (_this.props.todos.inputValue.match(/^\s*$/)) {
                return;
            }
            var todo = {
                'Task': _this.props.todos.inputValue,
                'Complete': false,
                'taskType': 'General',
                'TaskId': -1 // will be updated in the action method
            };
            // console.log(todo)
            _this.props.onSubmitClick(todo);
        };
        _this.deleteTask = function (taskId) {
            var todosList = _this.props.todos.todos;
            var currentTodo = todosList.filter(function (td) { return td.TaskId === taskId; });
            if (currentTodo && currentTodo.length === 1) {
                _this.props.onDeleteTask(currentTodo[0]);
            }
        };
        _this.toggleComplete = function (taskId) {
            var todosList = _this.props.todos.todos;
            var currentTodo = todosList.filter(function (td) { return td.TaskId === taskId; });
            if (currentTodo && currentTodo.length === 1) {
                _this.props.onTaskChanged(Object.assign({}, currentTodo[0], { Complete: !currentTodo[0].Complete }));
            }
        };
        //this.submitTodo = this.submitTodo.bind(this)
        _this.inputChange = _this.inputChange.bind(_this);
        _this.setType = _this.setType.bind(_this);
        return _this;
        /*
        this.state = {
            bannerSize: 'smartBannerPortrait',
        }
        this.setBannerSize = this.setBannerSize.bind(this)
        */
    }
    TodosApp.prototype.setType = function (type1) {
        this.props.onSetType(type1);
    };
    TodosApp.prototype.render = function () {
        var _a = this.props.todos, inputVal = _a.inputValue, todosList = _a.todos, type = _a.taskStatus;
        // console.log('test0')
        return (<react_native_1.View style={common_styles_js_1.styles.container}>
                    <react_native_1.View style={common_styles_js_1.styles.body}>
                        <react_native_1.ScrollView style={common_styles_js_1.styles.content}>
                            <Input_1.Input inputValue={inputVal} inputChange={this.inputChange}/>
                            <TodoList_1["default"] todos={todosList} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTask} type={type}/>
                            <Button_1["default"] submitTodo={this.submitTodo}/>
                        </react_native_1.ScrollView>
                        <TabBar_1["default"] type={type} setType={this.setType}/>
                    </react_native_1.View>
                </react_native_1.View>);
    };
    TodosApp.prototype.inputChange = function (nv) {
        console.log('test1');
        this.props.onTitleChanged(nv);
    };
    return TodosApp;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        todos: state.todos
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        // actions: bindActionCreators(TodosActions, dispatch) -- can use this
        // when you want to pass these dispatch methods to component that does not know about redux
        onSubmitClick: function (todo) {
            // console.log('in onSubmitClick')
            dispatch(todosActions.addTodos(todo));
        },
        onTitleChanged: function (newVal) {
            dispatch(todosActions.titleChanged(newVal));
        },
        onTaskChanged: function (todo) {
            dispatch(todosActions.editTodos(todo));
        },
        onDeleteTask: function (todo) {
            dispatch(todosActions.deleteTodos(todo));
        },
        onSetType: function (type) {
            dispatch(todosActions.todoTypeChanged(type));
        }
    };
};
exports.TodosAppConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TodosApp);
