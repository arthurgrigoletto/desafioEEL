import api, { apikey, hash, ts } from '../service/api';
import { GET_COMICS, COMIC_LOADING, GET_COMIC } from './types';

// Get Comics
export const getComics = params => dispatch => {
  const limit = `limit=${params.limit || '50'}`;

  dispatch(setCreatorLoading());
  api
    .get(`/comics?ts=${ts}&apikey=${apikey}&hash=${hash}&${limit}`)
    .then(res => dispatch({ type: GET_COMICS, payload: res.data.results }))
    .catch(() => dispatch({ type: GET_COMICS, payload: null }));
};

// Get Comic
export const getComic = (id, params) => dispatch => {
  const limit = `limit=${params.limit || '50'}`;

  dispatch(setCreatorLoading());
  api
    .get(`/comics/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}&${limit}`)
    .then(res => dispatch({ type: GET_COMIC, payload: res.data.results }))
    .catch(() => dispatch({ type: GET_COMIC, payload: null }));
};

// Set loading state
export const setCreatorLoading = () => {
  return {
    type: COMIC_LOADING
  };
};
