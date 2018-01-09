import { EXAMPLE_ACTION } from '../actions/example.action'

var INITIAL_STATE = {
  value: 'orginal value'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return { value: action.payload }
    default:
      return state;
  }
};
