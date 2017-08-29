"use strict";
exports.__esModule = true;
var redux_mock_store_1 = require("redux-mock-store");
var redux_thunk_1 = require("redux-thunk");
var initialState_1 = require("../reducers/initialState");
var middlewares = [redux_thunk_1["default"]];
exports.mockStore = redux_mock_store_1["default"](middlewares)(initialState_1["default"]);
