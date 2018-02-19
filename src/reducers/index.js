import { combineReducers } from 'redux';

// reducers
import ExampleReducer from './example.reducer';
import AuthReducer from './auth.reducer';

const rootReducer = combineReducers({
  example: ExampleReducer,
  auth: AuthReducer
});

export default rootReducer;
