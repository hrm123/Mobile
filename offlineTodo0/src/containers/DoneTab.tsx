import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import * as TodosTSTypes from '../types/todoTypes'
import TodoList from '../components/TodoList'
const todosActions =  require('../actions/todosActions')
import * as Redux from 'redux'

export interface DoneTabProps  {
}

export interface DoneTabConnectProps {
  completedTodos: TodosTSTypes.Todo[],
  maxTodoIndex: number,
}

export interface DoneTabDispatchProps {
  onTitleChanged:  (newVal) => void
}

type DoneTabFullProps = DoneTabProps & DoneTabDispatchProps & DoneTabConnectProps & TodosTSTypes.ITabCommonConnectProps

class DoneTab extends React.Component<DoneTabFullProps, any> {
  constructor(props: DoneTabFullProps) {
    super(props)
  }

  public render(): JSX.Element {
    const todosListModel: TodosTSTypes.TodoListModel  = {
      todos : this.props.completedTodos,
      toggleComplete : null,
      deleteTodo : null
    }
    return (
        <View>
          <TodoList {...todosListModel} />
        </View>
    )
  }
}

const mapStateToProps = (state: TodosTSTypes.TodosState /*, ownProps?: Props */): DoneTabConnectProps => {
  const currentProps: DoneTabConnectProps = Object.assign(this.props,  {
    pendingTodos: state.pendingTodos,
    maxTodoIndex: state.maxTodoIndex
  })
  return currentProps
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): DoneTabDispatchProps => {
  return {
    onTitleChanged:  (newVal) => {
      dispatch(todosActions.titleChanged(newVal))
    }
  }
}

export const DoneTabContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DoneTab)