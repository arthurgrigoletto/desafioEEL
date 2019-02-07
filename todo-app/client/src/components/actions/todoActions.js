import axios from 'axios';
import { DESCRIPTION_CHANGED, TODO_SEARCH, TODO_CLEAR } from './types';

const URL = '/api/todo';

export const changeDescription = ({ target: { value } }) => ({
  type: DESCRIPTION_CHANGED,
  payload: value
});

export const search = () => (dispatch, getState) => {
  const description = getState().todo.description;
  const search = description ? `?description__regex=${description}` : '';

  axios.get(`${URL}${search}`).then(res =>
    dispatch({
      type: TODO_SEARCH,
      payload: res.data
    })
  );
};

export const add = description => dispatch => {
  axios
    .post(URL, { description })
    .then(res => dispatch(clear()))
    .then(resp => dispatch(search()));
};

export const markAsDone = todo => dispatch => {
  axios
    .put(`${URL}/${todo._id}`, { ...todo, done: true })
    .then(res => dispatch(search()));
};

export const markAsPending = todo => dispatch => {
  axios
    .put(`${URL}/${todo._id}`, { ...todo, done: false })
    .then(res => dispatch(search()));
};

export const remove = todo => dispatch => {
  axios.delete(`${URL}/${todo._id}`).then(res => dispatch(search()));
};

export const clear = () => {
  return [
    {
      type: TODO_CLEAR
    },
    search()
  ];
};
