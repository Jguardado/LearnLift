import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Animation from 'lottie-react-native';
import anim from '../assets/soda_loader.json';
import btn from '../assets/button_press.json';

//NOTE: This page is not be ing used at the moment

export default class Landing extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { containerStyle, welcomeStyle, buttonStyle, spinnerStyle } = styles;
    return (
      <View style={containerStyle}>
        <View className={spinnerStyle}>
          <Animation
            ref={(animation) => {
              this.animation = animation;
            }}
            style={{
              width: 80,
              height: 80,
            }}
            loop
            source={anim}
          />
        </View>
        <Button
          title="Go to Content Page"
          color="#ffffff"
          onPress={() => navigate('Content')}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42b6f4',
  },
  welcomeStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  buttonStyle: {
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  spinnerStyle: {
    top: 0,
  },
};
