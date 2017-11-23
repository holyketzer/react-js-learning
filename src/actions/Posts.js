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
  return (dispatch, getState) => {
    dispatch(requestPosts());

    const { posts: { filter, pagination: { current, size } } } = getState();

    return request
      .get(`${API_ROOT}/posts`)
      .query({
        page: current,
        pageSize: size,
        filter
      })
      .end((err, response) => {
        if (err) {
          dispatch(errorPosts());
        } else {
          dispatch(receivePosts(response.body));
        }
      });
  };
}

export const postsPageChange = (page) => ({
  type: types.POSTS_PAGE_CHANGE,
  page
});

const postsFilterChange = (filter) => ({
  type: types.POSTS_FILTER_CHANGE,
  filter
});

export const handleFilterChange = (filter) => (
  (dispatch) => {
    dispatch(postsFilterChange(filter));
    dispatch(fetchPosts());
  }
);
