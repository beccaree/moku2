import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ItemFormScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('pageTitle', 'Item'),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      item: props.navigation.getParam('item', {}),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Item Form Screen</Text>
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