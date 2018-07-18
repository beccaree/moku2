import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import InventoryScreen from '../screens/InventoryScreen';
import ItemFormScreen from '../screens/ItemFormScreen';
import SellScreen from '../screens/SellScreen';
import SoldScreen from '../screens/SoldScreen';

const InventoryStack = createStackNavigator({
  Inventory: InventoryScreen,
  ItemForm: ItemFormScreen,
},
{
  initialRouteName: 'Inventory',
});

InventoryStack.navigationOptions = {
  tabBarLabel: 'Inventory',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-apps${focused ? '' : '-outline'}`
          : 'md-apps'
      }
    />
  ),
};

const SellStack = createStackNavigator({
  Sell: SellScreen,
});

SellStack.navigationOptions = {
  tabBarLabel: 'Sell',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-cart${focused ? '' : '-outline'}` : 'md-cart'}
    />
  ),
};

const SoldStack = createStackNavigator({
  Sold: SoldScreen,
});

SoldStack.navigationOptions = {
  tabBarLabel: 'Sold',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-paper${focused ? '' : '-outline'}` : 'md-paper'}
    />
  ),
};

export default createBottomTabNavigator({
  InventoryStack,
  SellStack,
  SoldStack,
});
