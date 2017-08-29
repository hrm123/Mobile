"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native"); // we need to import AsyncStorage to use as a storage engine
var redux_1 = require("redux");
var redux_persist_1 = require("redux-persist");
var rootReducer_1 = require("./reducers/rootReducer");
var redux_thunk_1 = require("redux-thunk");
var remote_redux_devtools_1 = require("remote-redux-devtools");
var redux_logger_1 = require("redux-logger");
var redux_promise_1 = require("redux-promise");
var EnvironmentDetails = require("./environment");
var configureStore = function (onComplete) {
    var logger = redux_logger_1.createLogger({});
    var middlewares = [redux_thunk_1["default"]];
    if (EnvironmentDetails.env === 'dev') {
        middlewares.push(logger);
    }
    middlewares.push(redux_promise_1["default"]);
    var store = remote_redux_devtools_1.composeWithDevTools(redux_1.applyMiddleware.apply(void 0, middlewares), redux_persist_1.autoRehydrate())(redux_1.createStore)(rootReducer_1["default"]);
    redux_persist_1.persistStore(store, { storage: react_native_1.AsyncStorage }, onComplete).purge();
    return store;
};
exports["default"] = configureStore;
