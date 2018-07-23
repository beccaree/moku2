import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'expo';

import firebase from '../helpers/Firebase'
import InventoryListContainer from '../containers/InventoryListContainer';
import Colors from '../constants/Colors';

const inventoryRef = firebase.database().ref('inventory');

export default class InventoryScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Inventory',
      headerRight: (
        <Icon.Ionicons
          name='ios-create-outline'
          size={30}
          color={Colors.tintColor}
          style={{marginRight: 15}}
          onPress={() => navigation.navigate('ItemForm', {
              pageTitle: 'New Item',
          })}
        />
      ),
    };
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
        <InventoryListContainer items={this.state.items} />
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
