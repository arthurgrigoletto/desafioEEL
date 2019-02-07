import api from '../services/api';
import { GET_TASKS } from './types';

// Get Tasks
export const index = () => dispatch => {
  api
    .get('/todo')
    .then(res => dispatch({ type: GET_TASKS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: GET_TASKS,
        payload: null
      })
    );
};
