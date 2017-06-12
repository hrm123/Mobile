import React from 'react'
import { mount, render, shallow } from 'enzyme'
//import renderer from 'react-test-renderer'
import TodosApp from './containers/todos'
//import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
//import * as TodosTsActions from '../src/actions/actionTypes'
import {createStore} from 'redux'
import todosReducer from './reducers/todosreducer'
//import Index from './index.android';
import initialState from './reducers/initialState';
//import renderer from 'react-native-mock-render';

describe('>>>T O D O S A P P -- snapshot',() => {
  let store,wrapper

  beforeEach(()=>{

      var jsdom = require('jsdom').jsdom;                   
      global.document = jsdom('');                             
      global.window = document.defaultView;  
      global.mount = mount;
      global.render = render;
      global.shallow = shallow;
      Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {         
          global[property] = document.defaultView[property];   
        }                                                      
      });    
      
  })


  it('+++capturing Snapshot of Home', () => {
        //const renderedValue =  renderer.create(<TodosApp />).toJSON()
        //expect(renderedValue).toMatchSnapshot();
        store = createStore(todosReducer, initialState.todos )
        //store.dispatch(TodosTsActions.(500))
        wrapper = mount( <Provider store={store}><TodosApp /></Provider> )
        console.log(wrapper.debug())
    });
/*
  it('renders correctly', () => {
    const tree = renderer.create(
      <Index />
    );
    expect(tree).toBeDefined();
  });   
  */ 
})


/*

describe('>>>T O D O S A P P -- REACT-REDUX (actual Store + reducers) more of Integration Testing',()=>{
    //const initState = initialState
    let store,wrapper

    beforeEach(()=>{
        store = createStore(todosReducer)
        wrapper = mount( <Provider store={store}><TodosApp /></Provider> )
    })

    it('+++ check Prop matches with initialState', () => {
        //store.dispatch(addInputs(500))
       expect(wrapper.find(TodosApp).prop('todos.inputValue')).toBe('My first todo')
    });

});


describe('>>>T O D O S A P P --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<TodosApp />)
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

});
*/