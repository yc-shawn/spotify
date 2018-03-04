import { combineReducers } from 'redux';

// Reducers
import ExampleReducer from './example.reducer';
import AuthReducer from './auth.reducer';
import ArtistReducer from './artist.reducer';
import AlbumReducer from './album.reducer';
import TrackReducer from './track.reducer';

// Combine Reducers
const rootReducer = combineReducers({
  example: ExampleReducer,
  auth: AuthReducer,
  artist: ArtistReducer,
  album: AlbumReducer,
  track: TrackReducer
});

export default rootReducer;
