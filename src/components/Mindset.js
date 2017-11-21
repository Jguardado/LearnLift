import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Mindset extends Component {
  render() {
    // console.log('props: ', this.props);
    const { exercise } = this.props.navigation.state.params;
    return (
      <View>
        <Text>
          Mindset
        </Text>
        <Text>
          {exercise}
        </Text>
      </View>
    );
  }
}

export default Mindset;
