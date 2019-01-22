import { combineReducers } from 'redux';

import basicReducer from './basicReducer';
import searchReducer from './searchReducer';
import searchVisibilityReducer from './searchVisibilityReducer';

const reducers = combineReducers({
  basicReducer,
  searchReducer,
  searchVisibilityReducer
})

export default reducers;
