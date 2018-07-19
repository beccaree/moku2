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
var ListItem_1 = __importDefault(require("../components/ListItem"));
var ListContainer = /** @class */ (function (_super) {
    __extends(ListContainer, _super);
    function ListContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListContainer.prototype.render = function () {
        return (<react_native_1.ScrollView>
        {this.props.items.map(function (item) { return <ListItem_1.default key={item.id} item={item}/>; })}
      </react_native_1.ScrollView>);
    };
    return ListContainer;
}(react_1.default.Component));
exports.default = ListContainer;
//# sourceMappingURL=ListContainer.js.map