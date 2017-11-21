import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Equipment extends Component {
  render() {
    const { exercise } = this.props.navigation.state.params;
    return (
      <View>
        <Text>
          Equipment
        </Text>
        <Text>
          {exercise}
        </Text>
      </View>
    );
  }
}

export default Equipment;
