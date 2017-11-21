import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import intialState from '../data';

import Workout from './workout';

const exercies = (state = {}) => state;

const rootReducer = combineReducers({
  Workout,
  exercies,
});

const enhancer = composeWithDevTools(
  applyMiddleware(thunk),
);

export const store = createStore(rootReducer, intialState, enhancer);
