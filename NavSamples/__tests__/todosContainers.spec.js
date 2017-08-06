import React from 'react'

import * as TodoContainer from '../src/screens/containers/todosContainers'
import * as Mocks from '../setup/mocks'
import * as TodosActionsTypes from '../src/actions/actionTypes'

describe('>>> T O D O S CONTAINER -- tests', () => {
    let wrapper
    let dummyFns = {
        onSetTypeMock : jest.fn((type1) => {
            console.log(type1)
        }),
        onSubmitClickMock : jest.fn((todo) => {
            console.log(todo)
        }),
        onTitleChangeMock : jest.fn((newVal) => {
            console.log(newVal)
        })
    }
    let store = Mocks.mockStore
    let currentState = store.getState().todos
    let todoContainerModel = {
        onSetType: dummyFns.onSetTypeMock,
        onSubmitClick: dummyFns.onSubmitClickMock,
        onDeleteTask: dummyFns.onSubmitClickMock,
        onTitleChanged: dummyFns.onTitleChangeMock,
        onTaskChanged: dummyFns.onSubmitClickMock,
        todos: currentState
    }

    beforeEach(() => {
        store.clearActions();
    });
    
    it('should render a Todo container', () => {

    });
    


});