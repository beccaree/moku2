import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

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

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>
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
