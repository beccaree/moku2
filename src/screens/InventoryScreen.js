import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from '../helpers/Firebase'
import ListContainer from '../containers/ListContainer';

const inventoryRef = firebase.database().ref('inventory');

export default class InventoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Inventory',
  };

  constructor() {
    super();
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    inventoryRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          description: items[item].description,
          price: items[item].price,
          stock: items[item].stock,
          imageUrl: items[item].imageUrl,
        });
      }
      this.setState({
        items: newState,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ListContainer items={this.state.items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
