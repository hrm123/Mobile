class ActionTypes   {
    public static readonly LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS'
    public static readonly ADD_TODOS = 'ADD_TODOS'
    public static readonly REFRESHING_TODOS  = 'REFRESHING_TODOS'
    public static readonly TASK_TITLE_CHANGED  = 'TASK_TITLE_CHANGED'
    public static readonly EDIT_TODOS = 'EDIT_TODOS'
    public static readonly DELETE_TODOS = 'DELETE_TODOS'
    public static readonly CHANGE_TODO_TYPE = 'CHANGE_TODO_TYPE'
    public static readonly LOGIN = 'LOGIN'
    public static readonly LOGOUT = 'LOGOUT'
    public static readonly FIREBASE_CONFIG_REPLACE = 'FIREBASE_CONFIG_REPLACE'
    public static readonly FIREBASE_REF_SET = 'FIREBASE_REF_SET'
}


alert(ActionTypes.LOAD_TODOS_SUCCESS)
export interface LoadTodosSuccess {
    type: ActionTypes.LOAD_TODOS_SUCCESS;
}

export type ReduxAction = LoadTodosSuccess;