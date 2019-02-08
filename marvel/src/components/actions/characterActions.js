import api, { apikey, hash, ts } from '../service/api';
import { CHARACTER_LOADING, GET_CHARACTERS, GET_CHARACTER } from './types';

// Get Characters
export const getCharacters = () => dispatch => {
  dispatch(setCharacterLoading());

  api
    .get(`/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=51`)
    .then(({ data: { data } }) =>
      dispatch({ type: GET_CHARACTERS, payload: data.results })
    )
    .catch(() => dispatch({ type: GET_CHARACTERS, payload: null }));
};

// Get Character
export const getCharacter = id => dispatch => {
  dispatch(setCharacterLoading());
  api
    .get(`/characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`)
    .then(({ data: { data } }) =>
      dispatch({ type: GET_CHARACTER, payload: data.results[0] })
    )
    .catch(() => dispatch({ type: GET_CHARACTER, payload: null }));
};

// Set loading state
export const setCharacterLoading = () => {
  return {
    type: CHARACTER_LOADING
  };
};
