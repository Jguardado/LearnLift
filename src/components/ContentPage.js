import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';
import LoginForm from './LoginForm';

const ContentPage = () => {
  const { 
    containerStyle, 
    textContent, 
    buttonStyle, 
    buttonTextStyle 
  } = styles;
  
  return (
    <View style={containerStyle}>
      <Text style={textContent}>
          Welcome to LearnLift
      </Text>
      <LoginForm />
    </View>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#42b6f4',
    backgroundColor: '#fff',
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    height: 50
  },
  buttonTextStyle: {
    fontSize: 25,
    fontWeight: '400',
    position: 'relative'
  },
  textContent: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 75
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42f4ad',
  },
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);
