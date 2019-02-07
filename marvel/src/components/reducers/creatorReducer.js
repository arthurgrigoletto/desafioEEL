import { CREATOR_LOADING, GET_CREATORS, GET_CREATOR } from '../actions/types';

const initialState = {
  creators: [],
  creator: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATOR_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CREATORS:
      return {
        ...state,
        creators: action.payload,
        loading: false
      };
    case GET_CREATOR:
      return {
        ...state,
        creator: action.payload,
        loading: true
      };
    default:
      return state;
  }
};
