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
var Colors_1 = __importDefault(require("../constants/Colors"));
var TabBarIcon = /** @class */ (function (_super) {
    __extends(TabBarIcon, _super);
    function TabBarIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabBarIcon.prototype.renderStockAndPriceRow = function () {
        return (<react_native_1.View style={styles.stockPriceRow}>
        <react_native_1.Text>{this.props.item.stock} in stock</react_native_1.Text>
        <react_native_1.Text>${this.props.item.price}</react_native_1.Text>
      </react_native_1.View>);
    };
    TabBarIcon.prototype.renderDetails = function () {
        return (<react_native_1.View style={styles.details}>
        <react_native_1.Text style={styles.titleText}>{this.props.item.title}</react_native_1.Text>
        <react_native_1.Text style={styles.subtitleText}>{this.props.item.description}</react_native_1.Text>
        {this.renderStockAndPriceRow()}
      </react_native_1.View>);
    };
    TabBarIcon.prototype.render = function () {
        return (<react_native_1.View style={styles.item}>
        <react_native_1.View style={styles.placeholderImg}/>
        {this.renderDetails()}
      </react_native_1.View>);
    };
    return TabBarIcon;
}(react_1.default.Component));
exports.default = TabBarIcon;
var styles = react_native_1.StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    placeholderImg: {
        width: 60,
        height: 60,
        backgroundColor: 'powderblue'
    },
    details: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
    },
    titleText: {
        fontWeight: 'bold',
    },
    subtitleText: {
        color: Colors_1.default.subtitleText,
    },
    stockPriceRow: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
    },
});
//# sourceMappingURL=ListItem.js.map