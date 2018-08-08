import React from 'react';
import { 
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

import CheckoutItem from '../components/CheckoutItem'

export default class CheckoutScreen extends React.Component {
  static navigationOptions = {
    title: 'Checkout',
  };

  render() {
    return(
      <View>
        { this.props.navigation.getParam('selectedItems', []).map(itemId => <CheckoutItem key={itemId} itemId={itemId}/>) }
      </View>
    )
  }
}