import React from 'react';
import { ScrollView } from 'react-native';

import SelectableItem from '../components/SelectableItem';

function SellListContainer(props) {
  return (
    <ScrollView contentInset={{top: 0, left: 0, bottom: 80, right: 0}}>
      {props.items.map(item => <SelectableItem key={item.id} onItemSelected={props.onItemSelected} item={item} />)}
    </ScrollView>
  );
}

export default SellListContainer;