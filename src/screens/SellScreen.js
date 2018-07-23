import React from 'react';
import { 
  View,
  Platform,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import firebase from '../helpers/Firebase';
import SellListContainer from '../containers/SellListContainer';

const inventoryRef = firebase.database().ref('inventory');

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
    inventoryRef.on('value', (snapshot) => {
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

  onItemSelected(itemId) {
    // push item id into selected list
    console.log(itemId); // works!!! <-----start here
  }

  onCheckoutPressed() {
    // TODO: Do stuff
  }

  render() {
    return (
      <View style={styles.container}>
        <SellListContainer items={this.state.items} onItemSelected={this.onItemSelected} />

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>2 items selected</Text>
          <Button title='Checkout' onPress={this.onCheckoutPressed} />
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
  tabBarInfoContainer: {
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
