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
var ListContainer_1 = __importDefault(require("../containers/ListContainer"));
var SellScreen = /** @class */ (function (_super) {
    __extends(SellScreen, _super);
    function SellScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: [],
        };
        return _this;
    }
    SellScreen.prototype.onCheckoutPressed = function () {
        // TODO: Do stuff
    };
    SellScreen.prototype.render = function () {
        return (<react_native_1.View style={styles.container}>
        <ListContainer_1.default items={this.state.items}/>

        <react_native_1.View style={styles.tabBarInfoContainer}>
          <react_native_1.Text style={styles.tabBarInfoText}>2 items selected</react_native_1.Text>
          <react_native_1.Button title='Checkout' onPress={this.onCheckoutPressed}/>
        </react_native_1.View> 
      </react_native_1.View>);
    };
    SellScreen.navigationOptions = {
        title: 'Sell',
    };
    return SellScreen;
}(react_1.default.Component));
exports.default = SellScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        // ...Platform.select({
        //   ios: {
        //     shadowColor: 'black',
        //     shadowOffset: { height: -3 },
        //     shadowOpacity: 0.1,
        //     shadowRadius: 3,
        //   },
        //   android: {
        //     elevation: 20,
        //   },
        // }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
});
//# sourceMappingURL=SellScreen.js.map