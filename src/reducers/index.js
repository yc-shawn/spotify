import { combineReducers } from 'redux';

// reducers
import ExampleReducer from './example.reducer';

const rootReducer = combineReducers({
  example: ExampleReducer
});

export default rootReducer;
