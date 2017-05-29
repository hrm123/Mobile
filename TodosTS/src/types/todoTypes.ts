export interface Todo {
    Task: string
    Complete: boolean
    taskType: string
    TaskId?: number
}

export interface TodosState  {
    todos: Todo[],
    inputValue: string,
    taskType: string,
    taskStatus: string,
    maxTodoIndex: number
}

export interface AppState  {
    todos: TodosState
}
