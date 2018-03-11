import { SET_ARTIST } from '../actions/artist.action'

var INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ARTIST:
      return action.payload
    default:
      return state;
  }
};
