import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { ItemRef } from '../helpers/Firebase';

export default class CheckoutItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: '',
      title: '',
      description: '',
      price: 0,
      stock: 0,
      amount: 1,
    }
  }

  componentDidMount() {
    ItemRef(this.props.itemId).on('value', (snapshot) => {
      let databaseItem = snapshot.val();
      this.setState({
        itemId: this.props.itemId,
        title: databaseItem.title,
        description: databaseItem.description,
        price: databaseItem.price,
        stock: databaseItem.stock,
      });
    });
  }

  render() {
    return(
      <View>
        <Text>{this.state.itemId}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});