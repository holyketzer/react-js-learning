import * as types from 'constants/actionTypes/PostsActionTypes';

import { API_CALL } from 'middleware/API';

export function fetchPosts({ page, pageSize, filter }) {
  return {
    [API_CALL]: {
      endpoint: '/posts',
      method: 'GET',
      query: { page, pageSize, filter },
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}

export const postsPageChange = (page) => ({
  type: types.POSTS_PAGE_CHANGE,
  page
});

export const handleFilterChange = ({page, pageSize, filter}) => (
  fetchPosts({ page, pageSize, filter })
);
