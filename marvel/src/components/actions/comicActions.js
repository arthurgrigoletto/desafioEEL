import api, { apikey, hash, ts } from '../service/api';
import { GET_COMICS, COMIC_LOADING, GET_COMIC } from './types';

// Get Comics
export const getComics = () => dispatch => {
  dispatch(setComicLoading());
  api
    .get(`/comics?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=51&noVariants=true&hasDigitalIssue=true`)
    .then(({ data: { data } }) =>
      dispatch({ type: GET_COMICS, payload: data.results })
    )
    .catch(() => dispatch({ type: GET_COMICS, payload: null }));
};

// Get Comic
export const getComic = id => dispatch => {
  dispatch(setComicLoading());
  api
    .get(`/comics/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`)
    .then(({ data: { data } }) =>
      dispatch({ type: GET_COMIC, payload: data.results[0] })
    )
    .catch(() => dispatch({ type: GET_COMIC, payload: null }));
};

// Set loading state
export const setComicLoading = () => {
  return {
    type: COMIC_LOADING
  };
};
