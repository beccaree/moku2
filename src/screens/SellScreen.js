import React from 'react';
import { 
  View,
  Platform,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { InventoryRef } from '../helpers/Firebase';
import SellListContainer from '../containers/SellListContainer';

export default class SellScreen extends React.Component {
  static navigationOptions = {
    title: 'Sell',
  };

  constructor() {
    super();
    this.state = {
      items: [],
      selected: [],
    }
  }

  componentDidMount() {
    InventoryRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        if (items[item].stock !== 0) {
          newState.push({
            id: item,
            title: items[item].title,
            description: items[item].description,
            price: items[item].price,
            stock: items[item].stock,
            imageUrl: items[item].imageUrl,
          });
        }
    }
      this.setState({
        items: newState,
      });
    });
  }

  onItemSelected = (itemId) => {
    const selected = this.state.selected;
    let result = [];

    if (selected.includes(itemId)) {
      result = selected.filter(id => id !== itemId);
    } else {
      result = [...selected, itemId];
    }

    this.setState({
      selected: result
    });
  }

  onCheckoutPressed = () => {
    this.props.navigation.navigate('Checkout', {
      selectedItems: this.state.selected,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <SellListContainer items={this.state.items} onItemSelected={this.onItemSelected} />

        <View style={styles.checkoutInfoContainer}>
          <Text style={styles.checkoutInfoText}>
            {this.state.selected.length} item{this.state.selected.length === 1? '' : 's'} selected:
          </Text>
          <Button title="Checkout" onPress={this.onCheckoutPressed} disabled={ !this.state.selected.length > 0 } />
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  checkoutInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  checkoutInfoText: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    marginRight: 10,
  },
});
