import { SET_AUTH, NEW_AUTH } from '../actions/auth.action'

var INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH:
    case NEW_AUTH:
      return action.payload
    default:
      return state;
  }
};
