import {
  TEST_TYPE,
} from '../constants';

const Workout = (state = {}, action) => {
  switch (action.type) {
    case TEST_TYPE:
      return state;
    default:
      return state;
  }
};

export default Workout;
