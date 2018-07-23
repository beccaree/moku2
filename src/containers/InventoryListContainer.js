import React from 'react';
import { ScrollView } from 'react-native';

import ListItem from '../components/ListItem';

export default class InventoryListContainer extends React.Component {
  render() {
    return (
      <ScrollView>
        {this.props.items.map(item => <ListItem key={item.id} item={item} />)}
      </ScrollView>
    );
  }
}