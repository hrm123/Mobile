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
var react_native_1 = require("react-native");
var common_styles_js_1 = require("../styles/common-styles.js");
var Root = (function (_super) {
    __extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.renderIf = function (condition, content) {
        if (condition) {
            return content;
        }
        else {
            return null;
        }
    };
    Root.prototype.render = function () {
        return (<react_native_1.View style={common_styles_js_1.styles.container}>
            <react_native_1.View style={common_styles_js_1.styles.body}>
            </react_native_1.View>
        </react_native_1.View>);
    };
    return Root;
}(react_1.Component));
exports["default"] = Root;
