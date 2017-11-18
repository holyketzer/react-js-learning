import request from 'superagent';

import { API_ROOT } from 'constants/API';
import * as types from 'constants/actionTypes/PostsActionTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${API_ROOT}/posts`)
      .end((err, response) => {
        if (err) {
          dispatch(errorPosts());
        } else {
          dispatch(receivePosts(response.body));
        }
      });
  };
}

const incrementLikes = (id) => ({
  type: types.INCREMENT_POSTS_LIKES,
  id
});

export const handleLike = (id) => (
  (dispatch) => {
    dispatch(incrementLikes(id));
  }
);
