import * as types from 'constants/actionTypes/PostEditActionTypes';

import { API_CALL } from 'middleware/API';

export function updatePost(post) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${post.id}`,
      method: 'PUT',
      payload: post,
      query: {},
      types: [
        types.UPDATE_POST_REQUEST,
        types.UPDATE_POST_SUCCESS,
        types.UPDATE_POST_ERROR
      ]
    }
  };
}
