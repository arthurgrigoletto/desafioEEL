import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import comicReducer from './comicReducer';

const rootReducer = combineReducers({
  character: characterReducer,
  comic: comicReducer,
});

export default rootReducer;
