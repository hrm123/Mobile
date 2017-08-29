const initialTodos = [
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
];
const initialTodosState = {
    todos: initialTodos,
    inputValue: 'My first todo',
    taskType: 'General',
    taskStatus: 'All',
    maxTodoIndex: 2
};
const initialState = {
    todos: initialTodosState
};
export default initialState;
//# sourceMappingURL=initialState.js.map