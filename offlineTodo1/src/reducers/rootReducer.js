"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var todosReducer_1 = require("./todosReducer");
var rootReducer = redux_1.combineReducers({
    // short hand property names
    todos: todosReducer_1["default"]
});
exports["default"] = rootReducer;
