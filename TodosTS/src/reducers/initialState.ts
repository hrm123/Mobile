
import * as TodosTsTypes from '../types/todoTypes'

const initialTodos: TodosTsTypes.Todo[] = [
    {
        Complete: false,
        Task: 'task1',
        TaskId: 1,
        taskType: 'Career'
    },
    {
        Complete: false,
        Task: 'task2',
        TaskId: 2,
        taskType: 'Personal'
    }
]
const initialTodosState: TodosTsTypes.TodosState = {
        todos: initialTodos,
        inputValue: 'My first todo',
        taskType: 'General',
        taskStatus: 'All',
        maxTodoIndex: 2
    }
const initialState: TodosTsTypes.AppState =  {
    todos: initialTodosState
}


export default initialState
