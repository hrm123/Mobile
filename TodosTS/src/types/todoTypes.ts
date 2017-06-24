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

export type TabBarItemModel = {
    border?: any,
    title: string,
    selected?: any,
    setType: () => void,
    todoType: string
}

export type TabBarModel = {
    setType: (todoType: string) => void,
    type: string
}

export type TodoModel = {
    todo: Todo,
    toggleComplete: (id: number) => void,
    deleteTodo: (id: number) => void,
    key?: number
}

export type TodoListModel = {
    todos: Todo[],
    type: string,
    toggleComplete: (id: number) => void,
    deleteTodo: (id: number) => void
}

export type PressFn = () => void

export type TodoButtonModel = {
    onPress: PressFn,
    complete?: boolean,
    name: string
}