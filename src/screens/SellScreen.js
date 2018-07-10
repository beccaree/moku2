import React from 'react';
import { 
  View,
  Platform,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import ListContainer from '../containers/ListContainer';

export default class SellScreen extends React.Component {
  static navigationOptions = {
    title: 'Sell',
  };

  constructor() {
    super();
    this.state = {
      items: [],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListContainer items={this.state.items} />

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>2 items selected</Text>
          <Button title='Checkout'/>
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
