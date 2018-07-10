import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import InventoryContainer from '../screens/InventoryContainer';
import SellContainer from '../screens/SellContainer';
import SoldContainer from '../screens/SoldContainer';

const InventoryStack = createStackNavigator({
  Inventory: InventoryContainer,
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
  Sell: SellContainer,
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
  Sold: SoldContainer,
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
