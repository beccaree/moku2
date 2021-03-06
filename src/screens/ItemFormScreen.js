import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  Image
} from 'react-native';
import { ImagePicker, Permissions } from 'expo';

import Colors from '../constants/Colors';
import { InventoryRef } from '../helpers/Firebase';

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
      InventoryRef.push(item);

      this.props.navigation.goBack();
    }
  }

  onPickImagePressed = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        this.setState({ imageUrl: result.uri });
      }
    }
  }

  renderImagePicker() {
    const isEmptyImage = this.state.imageUrl === undefined || this.state.imageUrl === "";

    return (
      <View>
        {
          isEmptyImage
            ? <View style={styles.placeholderImg} />
            : <Image source={{ uri: this.state.imageUrl }} style={styles.image} />
        }
        <Button
          title={isEmptyImage ? 'Choose picture' : 'Pick another'}
          onPress={this.onPickImagePressed}
        />
      </View>
    )
  }

  renderSeparator() {
    return (<View style={styles.separator} />);
  }

  render() {
    const isEmptyTitle = this.state.title === "";
    
    return (
      <ScrollView style={styles.container}>
        {this.renderImagePicker()}

        <TextInput
          style={styles.textInput}
          placeholder={isEmptyTitle ? 'Please specify an item name' : 'Item Name*'}
          placeholderTextColor={isEmptyTitle ? Colors.lightRedText : null}
          clearButtonMode='while-editing'
          onChangeText={(text) => this.setState({
            title: text,
          })}
        />
        {this.renderSeparator()}

        <TextInput
          style={styles.textInput}
          placeholder='Description'
          clearButtonMode='while-editing'
          onChangeText={(text) => this.setState({
            description: text,
          })}
        />
        {this.renderSeparator()}

        <TextInput
          style={styles.textInput}
          placeholder='Price'
          clearButtonMode='while-editing'
          keyboardType='numeric'
          onChangeText={(text) => this.setState({
            price: parseFloat(text),
          })}
        />
        {this.renderSeparator()}

        <TextInput
          style={styles.textInput}
          placeholder='Stock'
          clearButtonMode='while-editing'
          keyboardType='numeric'
          onChangeText={(text) => this.setState({
            stock: parseInt(text, 10),
          })}
        />
        {this.renderSeparator()}
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
    backgroundColor: Colors.imagePlaceholder,
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