import React from 'react';
import { StyleSheet, ScrollView, View, Button, Text, TextInput } from 'react-native';

import Colors from '../constants/Colors';

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
      <ScrollView style={styles.container}>
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
        <View style={styles.separator} />

        <TextInput
          style={styles.textInput}
          placeholder='Description'
          clearButtonMode='while-editing'
          onChangeText={(text) => this.setState({
            description: text,
          })}
        />
        <View style={styles.separator} />

        <TextInput
          style={styles.textInput}
          placeholder='Price'
          clearButtonMode='while-editing'
          keyboardType='numeric'
          onChangeText={(text) => this.setState({
            price: text,
          })}
        />
        <View style={styles.separator} />

        <TextInput
          style={styles.textInput}
          placeholder='Stock'
          clearButtonMode='while-editing'
          keyboardType='numeric'
          onChangeText={(text) => this.setState({
            stock: text,
          })}
        />
        <View style={styles.separator} />
      </ScrollView>
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
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: 'stretch',
  },
  separator: {
    height: 1,
    backgroundColor: Colors.separatorLines,
    alignSelf: 'stretch',
  },
});