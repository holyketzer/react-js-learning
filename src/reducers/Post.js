import { assign, cloneDeep } from 'lodash';

import * as types from 'constants/actionTypes/PostActionTypes';

const initialState = {
  isFetching: false,
  error: false,
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
    case types.INCREMENT_POST_LIKES: {
      if (state.entry && state.entry.id == action.id) {
        const item = cloneDeep(state.entry);
        item.metadata.likesCount += 1;
        return assign({}, state, { entry: item });
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
