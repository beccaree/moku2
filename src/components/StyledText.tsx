import React from 'react';
import { Text } from 'react-native';

type Props = {
  style: any,
};

export class MonoText extends React.Component<Props, any> {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
