import * as types from 'constants/actionTypes/PostActionTypes';

export const handleLike = (id) => ({
  type: types.INCREMENT_POST_LIKES,
  id
});
