import React from 'react';
import { StyleSheet, ScrollView, View, Button, Text, TextInput, Image } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

import Colors from '../constants/Colors';
import firebase from '../helpers/Firebase';

const inventoryRef = firebase.database().ref('inventory');

export default class ItemFormScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('pageTitle', 'Item'),
      headerRight: (
        // () => {} is ugly but it stops warning of undefined onPress attribute
        <Button title='Save' onPress={navigation.getParam('saveItem', () => {})} />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = props.navigation.getParam('item', {});

    props.navigation.setParams({ saveItem: this.onSaveItem });
  }

  onSaveItem = () => {
    const isEmptyTitle = this.state.title === undefined || this.state.title === "";
    if (!isEmptyTitle) {
      const item = this.state;
      inventoryRef.push(item);

      this.props.navigation.goBack();
    }
  }

  onPickImagePressed = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
      });

      if (!result.cancelled) {
        this.setState({ imageUrl: result.uri });
      }
    }
  }

  render() {
    const isEmptyTitle = this.state.title === "";
    const isEmptyImage = this.state.imageUrl === undefined || this.state.imageUrl === "";

    return (
      <ScrollView style={styles.container}>
        {
          isEmptyImage
            ? <View style={styles.placeholderImg} />
            : <Image source={{ uri: this.state.imageUrl }} style={styles.image} />
        }

        <Button
          title={isEmptyImage ? 'Choose picture' : 'Pick another'}
          onPress={this.onPickImagePressed}
        />

        <TextInput
          style={styles.textInput}
          placeholder={isEmptyTitle ? 'Please specify an item name' : 'Item Name*'}
          placeholderTextColor={isEmptyTitle ? Colors.lightRedText : null}
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
    width: 150,
    height: 150,
    backgroundColor: 'powderblue'
  },
  image: {
    alignSelf: 'center',
    width: 150,
    height: 150,
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