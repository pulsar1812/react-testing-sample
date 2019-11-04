import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from './types';

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => async dispatch => {
  const res = await axios.get('http://jsonplaceholder.typicode.com/comments');

  dispatch({
    type: FETCH_COMMENTS,
    payload: res.data
  });
};
