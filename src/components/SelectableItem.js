import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

import ListItem from './ListItem';
import Colors from '../constants/Colors';

export default class SelectableItemContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    }
  }

  onItemPressed = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    })

    // TODO call listener from parent
  }

  render() {
    return (
      <TouchableHighlight 
        onPress={this.onItemPressed}
        underlayColor='#efffff' // lighter cyan 
        style={ this.state.isSelected ? styles.selected : null }
      >
        <ListItem item={this.props.item} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  selected: {
    backgroundColor: 'lightcyan', // light cyan
  }
});