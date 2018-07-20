import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import Colors from '../constants/Colors'; 

export default class TabBarIcon extends React.Component {
  renderStockAndPriceRow() {
    return (
      <View style={styles.stockPriceRow}>
        <Text>{this.props.item.stock} in stock</Text>
        <Text>${this.props.item.price}</Text>
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
    const isEmptyImage = this.props.item.imageUrl === undefined || this.props.item.imageUrl === "";

    return (
      <View>
        <View style={styles.item}>
          {
            isEmptyImage
              ? <View style={styles.placeholderImg} />
              : <Image source={{ uri: this.props.item.imageUrl }} style={styles.image} />
          }
          {this.renderDetails()}
        </View>
        <View style={styles.separator} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  placeholderImg: {
    width: 60,
    height: 60,
    backgroundColor: Colors.imagePlaceholder,
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
  separator: {
    height: 1,
    marginTop: 10,
    backgroundColor: Colors.separatorLines,
    alignSelf: 'stretch',
  },
});