import React from 'react';
import Root from './config/routes';
import { Provider } from 'react-redux';
import { store } from './reducers/store';

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
