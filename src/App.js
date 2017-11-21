import React, { Component } from 'react';
import Root from './config/routes';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { store } from './reducers/store';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyClKX3wdLdXUZnPrw-BK8C96C0RdhV4jfg',
      authDomain: 'learnlift-9c14f.firebaseapp.com',
      databaseURL: 'https://learnlift-9c14f.firebaseio.com',
      projectId: 'learnlift-9c14f',
      storageBucket: '',
      messagingSenderId: '394432487322'
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
} 

export default App;
