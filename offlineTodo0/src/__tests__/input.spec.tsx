import React from 'react'
import { mount, shallow, render } from 'enzyme'
import {Input} from '../components/Input'
import * as TodosTsTypes from '../types/todoTypes'
import { TextInput } from 'react-native'
// import sinon from 'sinon'

let global: any

describe('>>>Input COMPONENT -- tests', () => {
    let wrapper
    // let Mock = jest.fn((val: string) => {console.log(val) })
    // const inputChangeMock = new Mock()
    let mockFn = jest.fn()
    let inputModel: TodosTsTypes.IInputProps = {
        inputValue: 'todo1',
        inputChange: mockFn
    }
    beforeEach(() => {
      let jsdom = require('jsdom').jsdom
      global.document = jsdom('')
      global.window = document.defaultView
      global.mount = mount
      global.render = render
      global.shallow = shallow
      Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
          global[property] = document.defaultView[property]
        }
      })

      wrapper = mount(<Input {...inputModel} />)
    })

    it('should render a Input component with correct props and state', () => {
        let inputComponent = wrapper.find(Input)
        // console.log(inputComponent.debug())
        expect(inputComponent.props().inputValue).toEqual('todo1')
        expect(inputComponent.props().inputChange).toEqual(inputModel.inputChange)
        expect(wrapper.state('text')).toEqual('todo1')
    })

    it('should invoke inputChange function', () => {
        expect(wrapper).toBeTruthy()
        let inputComponent = wrapper.find(Input)
        let inputTextField = inputComponent.find(TextInput)
        expect(inputTextField).toBeTruthy()
        expect(inputTextField).toHaveLength(1)
        // console.log(inputTextField.debug())
        inputTextField.prop('onChange')('todo2') // Invoke onchange event to change text to todo2
        expect(wrapper.state('text')).toEqual('todo2')
        inputTextField.prop('onBlur')() // Invoke onBlur event
        expect(mockFn).toBeCalledWith('todo2')
    })

})