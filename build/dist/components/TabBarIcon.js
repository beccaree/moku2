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
var vector_icons_1 = require("@expo/vector-icons");
var Colors_1 = __importDefault(require("../constants/Colors"));
var TabBarIcon = /** @class */ (function (_super) {
    __extends(TabBarIcon, _super);
    function TabBarIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabBarIcon.prototype.render = function () {
        return (<vector_icons_1.Ionicons name={this.props.name} size={26} style={{ marginBottom: -3 }} color={this.props.focused ? Colors_1.default.tabIconSelected : Colors_1.default.tabIconDefault}/>);
    };
    return TabBarIcon;
}(react_1.default.Component));
exports.default = TabBarIcon;
//# sourceMappingURL=TabBarIcon.js.map