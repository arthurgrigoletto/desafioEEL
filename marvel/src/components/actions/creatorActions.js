import api, { apikey, hash, ts } from '../service/api';
import { CREATOR_LOADING, GET_CREATORS, GET_CREATOR } from './types';

// Get Creators
export const getCreators = params => dispatch => {
  const limit = `limit=${params.limit || '50'}`;

  dispatch(setCreatorLoading());
  api
    .get(`/creators?ts=${ts}&apikey=${apikey}&hash=${hash}&${limit}`)
    .then(res => dispatch({ type: GET_CREATORS, payload: res.data.results }))
    .catch(() => dispatch({ type: GET_CREATORS, payload: null }));
};

// Get Creator
export const getCreator = (id, params) => dispatch => {
  const limit = `limit=${params.limit || '50'}`;

  dispatch(setCreatorLoading());
  api
    .get(`/creators/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}&${limit}`)
    .then(res => dispatch({ type: GET_CREATOR, payload: res.data.results }))
    .catch(() => dispatch({ type: GET_CREATOR, payload: null }));
};

// Set loading state
export const setCreatorLoading = () => {
  return {
    type: CREATOR_LOADING
  };
};
