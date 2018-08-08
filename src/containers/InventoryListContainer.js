import React from 'react';
import { ScrollView } from 'react-native';

import ListItem from '../components/ListItem';

function InventoryListContainer(props) {
  return (
    <ScrollView>
      {props.items.map(item => <ListItem key={item.id} item={item} />)}
    </ScrollView>
  );
}

export default InventoryListContainer;