import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/Colors'; 

export default class TabBarIcon extends React.Component {
  renderStockAndPriceRow() {
    return (
      <View style={styles.stockPriceRow}>
        <Text>{this.props.item.stock} in stock</Text>
        <Text>${this.props.item.price}</Text>
        <View style={styles.bottomLine}/>
      </View>
    );
  }

  renderDetails() {
    return (
      <View style={styles.details}>
        <Text style={styles.titleText}>{this.props.item.title}</Text>
        <Text style={styles.subtitleText}>{this.props.item.description}</Text>
        {this.renderStockAndPriceRow()}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.item}>
        <View style={styles.placeholderImg} />
        {this.renderDetails()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  placeholderImg: {
    width: 60,
    height: 60,
    backgroundColor: 'powderblue'
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  titleText: {
    fontWeight: 'bold',
  },
  subtitleText: {
    color: Colors.subtitleText,
  },
  stockPriceRow: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
  },
});