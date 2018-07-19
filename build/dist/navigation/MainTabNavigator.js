"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_navigation_1 = require("react-navigation");
var TabBarIcon_1 = __importDefault(require("../components/TabBarIcon"));
var InventoryScreen_1 = __importDefault(require("../screens/InventoryScreen"));
var ItemFormScreen_1 = __importDefault(require("../screens/ItemFormScreen"));
var SellScreen_1 = __importDefault(require("../screens/SellScreen"));
var SoldScreen_1 = __importDefault(require("../screens/SoldScreen"));
var InventoryStack = react_navigation_1.createStackNavigator({
    Inventory: InventoryScreen_1.default,
    ItemForm: ItemFormScreen_1.default,
}, {
    initialRouteName: 'Inventory',
});
InventoryStack.navigationOptions = {
    tabBarLabel: 'Inventory',
    tabBarIcon: function (_a) {
        var focused = _a.focused;
        return (<TabBarIcon_1.default focused={focused} name={react_native_1.Platform.OS === 'ios'
            ? "ios-apps" + (focused ? '' : '-outline')
            : 'md-apps'}/>);
    },
};
var SellStack = react_navigation_1.createStackNavigator({
    Sell: SellScreen_1.default,
});
SellStack.navigationOptions = {
    tabBarLabel: 'Sell',
    tabBarIcon: function (_a) {
        var focused = _a.focused;
        return (<TabBarIcon_1.default focused={focused} name={react_native_1.Platform.OS === 'ios' ? "ios-cart" + (focused ? '' : '-outline') : 'md-cart'}/>);
    },
};
var SoldStack = react_navigation_1.createStackNavigator({
    Sold: SoldScreen_1.default,
});
SoldStack.navigationOptions = {
    tabBarLabel: 'Sold',
    tabBarIcon: function (_a) {
        var focused = _a.focused;
        return (<TabBarIcon_1.default focused={focused} name={react_native_1.Platform.OS === 'ios' ? "ios-paper" + (focused ? '' : '-outline') : 'md-paper'}/>);
    },
};
exports.default = react_navigation_1.createBottomTabNavigator({
    InventoryStack: InventoryStack,
    SellStack: SellStack,
    SoldStack: SoldStack,
});
//# sourceMappingURL=MainTabNavigator.js.map