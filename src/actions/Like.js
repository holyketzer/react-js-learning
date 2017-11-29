import * as types from 'constants/actionTypes/LikeActionTypes';
import { API_CALL } from 'middleware/API';

export const handleLike = (id) => (
  {
    [API_CALL]: {
      endpoint: `/posts/${id}/like`,
      method: 'POST',
      query: { },
      types: [
        types.LIKE_POST_REQUEST,
        types.LIKE_POST_SUCCESS,
        types.LIKE_POST_ERROR
      ]
    }
  }
);
