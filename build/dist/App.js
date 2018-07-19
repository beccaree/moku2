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
var expo_1 = require("expo");
var AppNavigator_1 = __importDefault(require("./navigation/AppNavigator"));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isLoadingComplete: false,
        };
        _this._handleLoadingError = function (error) {
            // In this case, you might want to report the error to your error
            // reporting service, for example Sentry
            console.warn(error);
        };
        _this._handleFinishLoading = function () {
            _this.setState({ isLoadingComplete: true });
        };
        return _this;
    }
    App.prototype.render = function () {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (<expo_1.AppLoading onError={this._handleLoadingError} onFinish={this._handleFinishLoading}/>);
        }
        else {
            return (<react_native_1.View style={styles.container}>
          {react_native_1.Platform.OS === 'ios' && <react_native_1.StatusBar barStyle="default"/>}
          <AppNavigator_1.default />
        </react_native_1.View>);
        }
    };
    return App;
}(react_1.default.Component));
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
//# sourceMappingURL=App.js.map