import React from 'react';
import { ScrollView } from 'react-native';

import ListItem from '../components/ListItem';
import { Item } from '../domain/types';

type Props = {
  items: Array<Item>,
};

export default class ListContainer extends React.Component<Props, any> {
  render() {
    return (
      <ScrollView>
        {this.props.items.map(item => <ListItem key={item.id} item={item} />)}
      </ScrollView>
    );
  }
}