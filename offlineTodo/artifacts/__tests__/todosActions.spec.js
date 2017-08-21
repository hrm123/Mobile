import * as TodosActionsTypes from '../actions/actionTypes';
import * as TodosActions from '../actions/todosActions';
import * as Mocks from './mocks';
// import initialState from '../reducers/initialState'
describe('todo actions tests', () => {
    let store = Mocks.mockStore;
    beforeEach(() => {
        store.clearActions();
    });
    it('should create an action to add todo', () => {
        let currentTodo = {
            Complete: false,
            Task: 'test add action creator',
            TaskId: 1,
            taskType: 'general'
        };
        // TodosActions.addTodos( currentTodo)(store.dispatch, store.getState, {todo: currentTodo})
        store.dispatch(TodosActions.addTodos(currentTodo));
        const actions = store.getActions();
        expect(actions[0]).toEqual({ 'todo': currentTodo, 'type': TodosActionsTypes.ADD_TODOS });
    });
    it('should create an action to edit todo', () => {
    });
    it('should create an action to delete todo', () => {
    });
});
//# sourceMappingURL=todosActions.spec.js.map