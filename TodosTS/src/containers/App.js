"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_native_router_flux_1 = require("react-native-router-flux");
// import Todos from './todos'
var TodoContainer = require("./todos");
var react_redux_1 = require("react-redux");
var configureStore_1 = require("../configureStore");
// creates our Redux store (elsewhere)
var store = configureStore_1["default"]();
var RouterWithRedux = react_redux_1.connect()(react_native_router_flux_1.Router);
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.isLoaded = _this.isLoaded.bind(_this);
        _this.state = {
            isLoading: true,
            store: configureStore_1["default"](_this.isLoaded)
        };
        return _this;
    }
    App.prototype.isLoaded = function () {
        this.setState({ isLoading: false });
    };
    App.prototype.render = function () {
        if (this.state.isLoading)
            return null;
        return (<react_redux_1.Provider store={store}>
                <RouterWithRedux>
                    <react_native_router_flux_1.Scene key='root'>
                        <react_native_router_flux_1.Scene key='todos' component={TodoContainer.TodosAppConnected} title='todos' hideNavBar={true} initial/>
                    </react_native_router_flux_1.Scene>
                </RouterWithRedux>
            </react_redux_1.Provider>);
    };
    return App;
}(react_1.Component));
exports["default"] = App;
