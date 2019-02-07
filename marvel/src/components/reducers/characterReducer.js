import {
  GET_CHARACTERS,
  GET_CHARACTER,
  CHARACTER_LOADING
} from '../actions/types';

const initialState = {
  characters: [],
  character: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loading: false
      };
    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
