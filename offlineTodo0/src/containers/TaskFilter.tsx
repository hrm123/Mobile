import { Component } from 'react'
import { connect } from 'react-redux'
import React from 'react'
import { TextInput, View } from 'react-native'
const todosActions =  require('../actions/todosActions')
import Button from '../components/Button'
import {styles} from '../styles/common-styles.js'
import * as Redux from 'redux'

export interface IFilterProps {
}

export interface IFilterConnectProps {
}

export interface IFilterDispatchProps {
    onTitleChanged: (newVal: string) => void,
    onSubmitClick: (newVal: string) => void
}

export interface IFilterState {
    taskTitle: string
}

type TaskFilterProps = IFilterProps & IFilterConnectProps & IFilterDispatchProps

class TaskFilter extends Component<TaskFilterProps, IFilterState> {
    constructor(props: TaskFilterProps) {
        super(props)
        this.inputChange = this.inputChange.bind(this)
        this.state = { taskTitle : 'my first todo'}
    }

    public render(): JSX.Element {
        // console.log('test0')
        return (
                <View style={styles.container}>
                    <View style={styles.body}>
                        <TextInput
                            value={this.state.taskTitle}
                            style={styles.input}
                            placeholder='What needs to be done?'
                            selectionColor='#666666'
                            onChangeText={ (text) => this.setState({taskTitle : text})}
                            onBlur={this.inputChange}
                        />
                        <Button submitTodo={this.submitTodo} />
                    </View>
                </View>
        )
    }

    submitTodo = () => {
        // console.log('button1')
        if (this.state.taskTitle.match(/^\s*$/)) {
            return
        }
        this.props.onSubmitClick(this.state.taskTitle)
    }

    inputChange() {
        console.log(this.state.taskTitle)
        this.props.onTitleChanged(this.state.taskTitle)
    }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => {
    return {
        // actions: bindActionCreators(TodosActions, dispatch) -- can use this
        // when you want to pass these dispatch methods to component that does not know about redux
        onSubmitClick: (nv) => {
            console.log('in onSubmitClick')
            let todo = {
                'Task': nv,
                'Complete': false,
                'taskType': 'General',
                'TaskId': -1 // will be updated in the action method
            }
            console.log(todo)
            dispatch(todosActions.addTodos(todo))
        },
        onTitleChanged:  (newVal) => {
            dispatch(todosActions.titleChanged(newVal))
        }
    }
}

export const TaskFilterContainer = connect(
  mapDispatchToProps
)(TaskFilter)
