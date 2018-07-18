import React from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';

export default class ItemFormScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('pageTitle', 'Item'),
    };
  };

  constructor(props) {
    super(props);
    this.state = props.navigation.getParam('item', {});
  }

  onPickImagePressed() {
    // TODO: Do stuff
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholderImg} />
        <Button
          title='Choose picture'
          onPress={this.onPickImagePressed}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Item Name'
          clearButtonMode='while-editing'
          onChangeText={(text) => this.setState({
            title: text,
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  placeholderImg: {
    alignSelf: 'center',
    width: 140,
    height: 140,
    backgroundColor: 'powderblue'
  },
  textInput: {
    height: 40,
    margin: 20,
    alignSelf: 'stretch',
  }
});