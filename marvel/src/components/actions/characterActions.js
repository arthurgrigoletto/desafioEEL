import api, { apikey, hash, ts } from '../service/api';
import { CHARACTER_LOADING, GET_CHARACTERS, GET_CHARACTER } from './types';

// Get Characters
export const getCharacters = params => dispatch => {
  const limit = `limit=${params.limit || '50'}`;

  dispatch(setCharacterLoading());
  api
    .get(`/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&${limit}`)
    .then(res => dispatch({ type: GET_CHARACTERS, payload: res.data.results }))
    .catch(() => dispatch({ type: GET_CHARACTERS, payload: null }));
};

// Get Character
export const getCharacter = (id, params) => dispatch => {
  const limit = `limit=${params.limit || '50'}`;

  dispatch(setCharacterLoading());
  api
    .get(`/characters/${id}?apikey=${apikey}&hash=${hash}&${limit}`)
    .then(res => dispatch({ type: GET_CHARACTER, payload: res.data.results }))
    .catch(() => dispatch({ type: GET_CHARACTER, payload: null }));
};

// Set loading state
export const setCharacterLoading = () => {
  return {
    type: CHARACTER_LOADING
  };
};
