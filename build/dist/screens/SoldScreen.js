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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var SoldScreen = /** @class */ (function (_super) {
    __extends(SoldScreen, _super);
    function SoldScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoldScreen.prototype.render = function () {
        return (<react_native_1.View />);
    };
    SoldScreen.navigationOptions = {
        title: 'app.json',
    };
    return SoldScreen;
}(react_1.default.Component));
exports.default = SoldScreen;
//# sourceMappingURL=SoldScreen.js.map