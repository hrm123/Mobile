

const initialState =  {  
    todos: {
        todos: [{
            Complete: false,
            Task: 'todo1',
            TaskId: 1,
            taskType: 'general'
        },{
            Complete: false,
            Task: 'todo2',
            TaskId: 2,
            taskType: 'general'
        }],
        inputValue: "My first todo",
        taskType: 'General',
        taskStatus:'All',
        maxTodoIndex: 2
    },
    acct : { userName: 'ANONYMOUS', loggedIn : false, loaded : true}
};


export default initialState;
