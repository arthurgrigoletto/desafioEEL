import { COMIC_LOADING, GET_COMICS, GET_COMIC } from '../actions/types';

const initialState = {
  comics: [],
  comic: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMIC_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_COMICS:
      return {
        ...state,
        comics: action.payload,
        loading: false
      };
    case GET_COMIC:
      return {
        ...state,
        comic: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
