
import * as TodosTsTypes from '../types/todoTypes'

const initialTodos: TodosTsTypes.Todo[] = [
    {
        CreateTime: undefined,
        RemindType: TodosTsTypes.enumRemindType.Time,
        RemindData: { EventTime: undefined },
        Task: 'task1',
        TaskId: 1,
        taskType:  TodosTsTypes.enumTaskType.General
    },
    {
        Task: 'task2',
        CreateTime: undefined,
        TaskId: 2,
        taskType: TodosTsTypes.enumTaskType.Personal,
        RemindType: TodosTsTypes.enumRemindType.Location,
        RemindData: { EventTime: undefined }
    }
]
const initialTodosState: TodosTsTypes.TodosState = {
    pendingTodos: initialTodos,
    completedTodos: [],
    deletedTodos: [],
    inputValue: 'My first todo',
    maxTodoIndex: 2
}
const initialState: TodosTsTypes.AppState =  {
    todos: initialTodosState
}


export default initialState
