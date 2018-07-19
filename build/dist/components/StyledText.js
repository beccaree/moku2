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
var MonoText = /** @class */ (function (_super) {
    __extends(MonoText, _super);
    function MonoText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonoText.prototype.render = function () {
        return <react_native_1.Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]}/>;
    };
    return MonoText;
}(react_1.default.Component));
exports.MonoText = MonoText;
//# sourceMappingURL=StyledText.js.map