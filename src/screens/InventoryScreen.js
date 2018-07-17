import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Icon } from 'expo';

import firebase from '../helpers/Firebase'
import ListContainer from '../containers/ListContainer';
import Colors from '../constants/Colors';

const inventoryRef = firebase.database().ref('inventory');

export default class InventoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Inventory',
    headerRight: (
      <Icon.Ionicons
        name='ios-create-outline'
        size={30}
        color={Colors.tintColor}
        style={{marginRight: 15}}
        onPress={() => alert('This is a button!')}
      />
    ),
  };

  constructor() {
    super();
    this.state = {
      items: [],
    }
  }

  onNewItemPressed() {
    alert('This is a button!');
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
