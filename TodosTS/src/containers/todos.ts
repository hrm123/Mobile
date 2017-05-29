import { Component, PropTypes  } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  View
} from 'react-native'
const todosActions =  require("../actions/todosActions")
import Footer from './footer'
import Input from '../components/Input'
import Button from '../components/Button'
import todoList from '../components/TodoList'
import TabBar from '../components/TabBar'
import TimerMixin from 'react-timer-mixin'
import styles from '../styles/common-styles.js'
import * as TodosTsTypes from '../types/todoTypes'


interface TodosProps {
    todos: TodosTsTypes.AppState,
    onSetType: Function
}

class Todos extends Component<TodosProps, any> {
    constructor(props) {
        super(props)
        this.submitTodo = this.submitTodo.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.setType = this.setType.bind(this)
        /*
        this.state = {
            bannerSize: 'smartBannerPortrait',
        }
        this.setBannerSize = this.setBannerSize.bind(this)
        */
    }

    setType (type) {
        this.props.onSetType(type)
    }

    render() {
        const {inputValue: inputVal, todos : todosList, taskStatus : type } = this.props.todos
        return {
                <View style={styles.container}>
                    <Header/>
                    <View style={styles.body}>
                        <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
                            <Input
                                inputValue={inputVal}
                                inputChange={this.inputChange}
                            /> 
                            <todoList 
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
        }
    }

    submitTodo = () => {
        if(this.props.todos.inputValue.match(/^\s*$/)){
            return
        }
        let todo = {
            "Task": this.props.todos.inputValue,
            "Complete": false,
            "taskType": "General",
             "TaskId": -1 // will be updated in the action method
        }
        const {userName} = this.props
        debugger
        if(userName.length >0){
            const ref = firebase.database().ref("/")
            const userRef= ref.child(userName.replace("@","_").replace(".","-"))
            const todosRef = userRef.child("todos")            
            todosRef.set([todo])
        }
        
        this.props.onSubmitClick(todo)
    }

    deleteTask = (taskId) => {
        const { todos : todosList } = this.props.todos
        const currentTodo = todosList.filter((td) => td.TaskId===taskId)
        if(currentTodo && currentTodo.length ===1){
            this.props.onDeleteTask(currentTodo[0])
        }
    }

    toggleComplete = (taskId) => {
        const { todos : todosList } = this.props.todos
        const currentTodo = todosList.filter((td) => td.TaskId===taskId)
        if(currentTodo && currentTodo.length ===1){
            this.props.onTaskChanged({TaskId: currentTodo[0].TaskId , Complete:!currentTodo[0].Complete})
        }
    }

    inputChange(nv){
        this.props.onTitleChanged(nv)
    }
}

reactMixin(Todos.prototype, TimerMixin)

Todos.propTypes = {
    todos: PropTypes.object.isRequired
}

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
})
*/



const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }

}

const mapDispatchToProps = (dispatch) => {
    return {
        // actions: bindActionCreators(TodosActions, dispatch) -- can use this
        // when you want to pass these dispatch methods to component that does not know about redux
        onSubmitClick: (todo) => {
            dispatch(todosActions.addTodos(todo))
        },
        onTitleChanged:  (newVal) => {
            dispatch(todosActions.titleChanged(newVal))
        },
        onTaskChanged: (todo) => {
            dispatch(todosActions.editTodos(todo))
        },
        onDeleteTask: (todo) => {
            dispatch(todosActions.deleteTodos(todo))
        },
        onSetType: (type) =>{
            dispatch(todosActions.todoTypeChanged(type))
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)