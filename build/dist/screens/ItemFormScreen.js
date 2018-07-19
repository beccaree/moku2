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
var ItemFormScreen = /** @class */ (function (_super) {
    __extends(ItemFormScreen, _super);
    function ItemFormScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = props.navigation.getParam('item', {});
        return _this;
    }
    ItemFormScreen.prototype.onPickImagePressed = function () {
        // TODO: Do stuff
    };
    ItemFormScreen.prototype.render = function () {
        var _this = this;
        return (<react_native_1.View style={styles.container}>
        <react_native_1.View style={styles.placeholderImg}/>
        <react_native_1.Button title='Choose picture' onPress={this.onPickImagePressed}/>
        <react_native_1.TextInput style={styles.textInput} placeholder='Item Name' clearButtonMode='while-editing' onChangeText={function (text) { return _this.setState({
            title: text,
        }); }}/>
      </react_native_1.View>);
    };
    ItemFormScreen.navigationOptions = function (_a) {
        var navigation = _a.navigation;
        return {
            title: navigation.getParam('pageTitle', 'Item'),
        };
    };
    return ItemFormScreen;
}(react_1.default.Component));
exports.default = ItemFormScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
    },
    placeholderImg: {
        alignSelf: 'center',
        width: 140,
        height: 140,
        backgroundColor: 'powderblue'
    },
    textInput: {
        height: 40,
        margin: 20,
        alignSelf: 'stretch',
    }
});
//# sourceMappingURL=ItemFormScreen.js.map