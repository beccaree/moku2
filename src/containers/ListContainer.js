import React from 'react';
import { ScrollView, Text } from 'react-native';

export default class ListContainer extends React.Component {
  render() {
    return (
      <ScrollView>
        {this.props.items.map(item => <Text key={item.id}>{item.title}</Text>)}
      </ScrollView>
    );
  }
}