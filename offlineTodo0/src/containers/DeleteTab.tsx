import React from 'react'
import * as Redux from 'redux'
import { View } from 'react-native'
import { connect } from 'react-redux'
import * as TodosTSTypes from '../types/todoTypes'
import TodoList from '../components/TodoList'
const todosActions =  require('../actions/todosActions')

export interface DeleteTabProps  {
}

export interface DeleteTabConnectProps {
  deletedTodos: TodosTSTypes.Todo[],
  maxTodoIndex: number,
}

export interface DeleteTabDispatchProps {
  onUnDeleteTask: (todo: TodosTSTypes.Todo) => void,
  onTitleChanged: (newVal: string) => void
}

type DeleteTabFullProps = DeleteTabProps & DeleteTabDispatchProps & DeleteTabConnectProps

class DeleteTab extends React.Component<DeleteTabFullProps, any> {
  constructor(props: DeleteTabFullProps) {
    super(props)
  }

  undeleteTask = (taskId) => {
    const { deletedTodos : todosList } = this.props
    const currentTodo = todosList.filter((td) => td.TaskId === taskId)
    if (currentTodo && currentTodo.length === 1) {
      this.props.onUnDeleteTask(currentTodo[0])
    }
  }

  public render(): JSX.Element {
    const todosListModel: TodosTSTypes.TodoListModel  = {
      todos : this.props.deletedTodos,
      deleteTodo: this.undeleteTask,
      toggleComplete : null
    }
    return (
        <View>
          <TodoList {...todosListModel} />
        </View>
    )
  }
}

const mapStateToProps = (state: TodosTSTypes.TodosState /*, ownProps?: Props */): DeleteTabConnectProps => {
  const currentProps: DeleteTabConnectProps = Object.assign(this.props,  {
    pendingTodos: state.pendingTodos,
    maxTodoIndex: state.maxTodoIndex
  })
  return currentProps
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): DeleteTabDispatchProps => {
  return {
    onTitleChanged:  (newVal) => {
      dispatch(todosActions.titleChanged(newVal))
    },
    onUnDeleteTask: (todo) => {
      dispatch(todosActions.deleteTodos(todo))
    }
  }
}

export const DeleteTabContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteTab)