import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card, CardSection } from './common';

class Equipment extends Component {
  render() {
    const { exercise } = this.props.navigation.state.params;
    return (
      <Card>
        <CardSection>
          <Text>
            Equipment
          </Text>
        </CardSection>
        <CardSection>
          <Text>
          {exercise}
          </Text>
        </CardSection>
      </Card>
    );
  }
}

export default Equipment;
