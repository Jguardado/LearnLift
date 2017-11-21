import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Card, CardSection } from './common';

class Mindset extends Component {
  render() {
    // console.log('props: ', this.props);
    const { exercise } = this.props.navigation.state.params;
    return (
      <Card>
        <CardSection>
          <Text>
            Mindset
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

export default Mindset;
