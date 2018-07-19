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
var vector_icons_1 = require("@expo/vector-icons");
var Firebase_1 = __importDefault(require("../helpers/Firebase"));
var ListContainer_1 = __importDefault(require("../containers/ListContainer"));
var Colors_1 = __importDefault(require("../constants/Colors"));
var inventoryRef = Firebase_1.default.database().ref('inventory');
var InventoryScreen = /** @class */ (function (_super) {
    __extends(InventoryScreen, _super);
    function InventoryScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: [],
        };
        return _this;
    }
    InventoryScreen.prototype.componentDidMount = function () {
        var _this = this;
        inventoryRef.on('value', function (snapshot) {
            var items = snapshot.val();
            var newState = [];
            for (var item in items) {
                newState.push({
                    id: item,
                    title: items[item].title,
                    description: items[item].description,
                    price: items[item].price,
                    stock: items[item].stock,
                    imageUrl: items[item].imageUrl,
                });
            }
            _this.setState({
                items: newState,
            });
        });
    };
    InventoryScreen.prototype.render = function () {
        return (<react_native_1.View style={styles.container}>
        <ListContainer_1.default items={this.state.items}/>
      </react_native_1.View>);
    };
    InventoryScreen.navigationOptions = function (_a) {
        var navigation = _a.navigation;
        return {
            title: 'Inventory',
            headerRight: (<vector_icons_1.Ionicons name='ios-create-outline' size={30} color={Colors_1.default.tintColor} style={{ marginRight: 15 }} onPress={function () { return navigation.navigate('ItemForm', {
                pageTitle: 'New Item',
            }); }}/>),
        };
    };
    return InventoryScreen;
}(react_1.default.Component));
exports.default = InventoryScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
//# sourceMappingURL=InventoryScreen.js.map