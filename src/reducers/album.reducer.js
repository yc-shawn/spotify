import { SET_ALBUM } from '../actions/album.action'

var INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALBUM:
      return action.payload
    default:
      return state;
  }
};
