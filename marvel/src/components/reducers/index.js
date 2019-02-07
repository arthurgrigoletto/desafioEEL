import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import comicReducer from './comicReducer';
import creatorReducer from './creatorReducer';

const rootReducer = combineReducers({
  character: characterReducer,
  comic: comicReducer,
  cretor: creatorReducer
});

export default rootReducer;
