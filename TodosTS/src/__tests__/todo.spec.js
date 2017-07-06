"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var react_native_1 = require("react-native");
var react_test_renderer_1 = require("react-test-renderer");
var Todo_1 = require("../components/Todo");
var TodoButton_1 = require("../components/TodoButton");
describe('>>>T O D O S COMPONENT -- tests', function () {
    var wrapper;
    var fn2 = jest.fn(); // (taskId: number) => { console.log(taskId)}
    var onPress = function () { console.log('onPress called'); };
    var todoModel = {
        deleteTodo: fn2,
        toggleComplete: fn2,
        key: 1,
        todo: {
            Complete: false,
            Task: 'todo1',
            TaskId: 1,
            taskType: 'General'
        }
    };
    beforeEach(function () {
        var jsdom = require('jsdom').jsdom;
        global.document = jsdom('');
        global.window = document.defaultView;
        global.mount = enzyme_1.mount;
        global.render = enzyme_1.render;
        global.shallow = enzyme_1.shallow;
        Object.keys(document.defaultView).forEach(function (property) {
            if (typeof global[property] === 'undefined') {
                global[property] = document.defaultView[property];
            }
        });
        wrapper = enzyme_1.shallow(<Todo_1["default"] {...todoModel}/>);
    });
    it('should render a Todo component', function () {
        //console.log(wrapper)
        //console.log(wrapper.render())
        expect(wrapper.contains(<react_native_1.Text>
                todo1
            </react_native_1.Text>)).toBe(true);
    });
    it('should render a Todo component using SnapShots', function () {
        expect(react_test_renderer_1["default"].create(<Todo_1["default"] {...todoModel}/>)).toMatchSnapshot();
    });
    describe('Todo component button tests', function () {
        it('Todo component button render', function () {
            var todoButtons = wrapper.find(TodoButton_1["default"]);
            expect(todoButtons).toHaveLength(2);
            //console.log(todoButtons)
            //console.log(todoButtons.first().props())
            var doneButtonState = { name: 'Done', onPress: onPress, complete: false };
            var deleteButtonState = { name: 'Delete', onPress: onPress, complete: false };
            expect(todoButtons.first().props().name).toEqual(doneButtonState.name);
            expect(todoButtons.first().props().complete).toEqual(doneButtonState.complete);
            expect(todoButtons.at(1).props().name).toEqual(deleteButtonState.name);
            //expect(todoButtons.at(1).props().onPress.getClass().equals(onPress.getClass())).toBeTruthy()
        });
        it('Todo component button click', function () {
            var todoButtons = wrapper.find(TodoButton_1["default"]);
            expect(todoButtons).toHaveLength(2);
            //console.log(todoButtons)
            //console.log(todoButtons.first().props())
            var doneButton = todoButtons.first();
            doneButton.simulate('press');
            expect(fn2).toHaveBeenCalled();
            expect(fn2).toHaveBeenCalledWith(todoModel.key);
        });
    });
    xit('should render a TodoList container', function () {
        var todoListObj = wrapper.find('TodoList');
        expect(todoListObj).toBeDefined();
        var todoObj = todoListObj.find('Todo');
        expect(todoObj).toBeDefined();
        //console.log(todoObj)
        //let todoTxt = todoObj.find('Text')
        //console.log(todoTxt.debug())
        //console.log(wrapper.debug())
        //console.log(wrapper.render())
        //console.log(todoTxt.Children())
        //    expect(todoTxt.find('textinput')).toEqual("What needs to be done?")
    });
});
