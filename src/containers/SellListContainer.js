import React from 'react';
import { ScrollView } from 'react-native';

import SelectableItem from '../components/SelectableItem';

export default class SellListContainer extends React.Component {
  render() {
    return (
      <ScrollView contentInset={{top: 0, left: 0, bottom: 80, right: 0}}>
        {this.props.items.map(item => <SelectableItem key={item.id} onItemSelected={this.props.onItemSelected} item={item} />)}
      </ScrollView>
    );
  }
}