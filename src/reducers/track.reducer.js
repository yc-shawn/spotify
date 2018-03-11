import { SET_TRACK } from '../actions/track.action'

var INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TRACK:
      return action.payload
    default:
      return state;
  }
};
