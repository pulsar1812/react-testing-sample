import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];
    case FETCH_COMMENTS:
      const comments = payload.map(comment => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
};
