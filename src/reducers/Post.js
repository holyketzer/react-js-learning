import { assign, cloneDeep } from 'lodash';

import * as types from 'constants/actionTypes/PostActionTypes';
import * as editTypes from 'constants/actionTypes/PostEditActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  validationErrors: {},
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, state, { entry: action.response });
    case likeTypes.LIKE_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case likeTypes.LIKE_POST_ERROR:
      return assign({}, state, { error: true });
    case likeTypes.LIKE_POST_SUCCESS: {
      if (state.entry && state.entry.id == action.response.id) {
        const item = cloneDeep(state.entry);
        item.metadata.likesCount = action.response.metadata.likesCount;
        return assign({}, state, { entry: action.response });
      } else {
        return state;
      }
    }
    case editTypes.UPDATE_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case editTypes.UPDATE_POST_ERROR:
      return assign({}, state, { validationErrors: action.error.response.body });
    case editTypes.UPDATE_POST_SUCCESS:
      return assign({}, state, { entry: action.response });

    default:
      return state;
  }
}
