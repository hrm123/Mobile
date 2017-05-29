
import * as TodosTsTypes from '../types/todoTypes'

const initialTodos: TodosTsTypes.Todo[] = []
const initialTodosState: TodosTsTypes.TodosState = {
        todos: initialTodos,
        inputValue: 'My first todo',
        taskType: 'General',
        taskStatus: 'All',
        maxTodoIndex: 0
    }
const initialState: TodosTsTypes.AppState =  {
    todos: initialTodosState
}


export default initialState
