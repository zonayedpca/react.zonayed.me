import { combineReducers } from 'redux';

import basicReducer from './basicReducer';
import searchReducer from './searchReducer';
import favoriteReducer from './favoriteReducer';
import searchVisibilityReducer from './searchVisibilityReducer';
import postReducer from './postReducer';

const reducers = combineReducers({
  basicReducer,
  searchReducer,
  favoriteReducer,
  searchVisibilityReducer,
  postReducer
})

export default reducers;
