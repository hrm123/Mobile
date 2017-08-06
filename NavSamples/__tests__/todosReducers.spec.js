import initialState from '../src/reducers/initialState';
import todosReducer from '../src/reducers/todosReducer'


describe('todos reducer tests', () => {


it('should return the initial state', () => {
        let actionType  = { type: '' }
        expect(
            todosReducer(undefined, actionType )
        ).toEqual(initialState.todos)
    });

})