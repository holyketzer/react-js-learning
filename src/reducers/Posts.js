import { assign, cloneDeep, find } from 'lodash';

import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  filter: '',
  entries: [],
  pagination: {
    current: 1,
    count: 0,
    size: 2
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST: {
      const filter = action.filter;
      return assign({}, state, { isFetching: true, filter });
    }
    case types.FETCH_POSTS_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POSTS_SUCCESS: {
      const { data, meta } = action.response;

      const pagination = {
        current: meta.pagination.page,
        size: meta.pagination.pageSize,
        count: meta.pagination.pagesCount
      };

      return assign({}, state, { entries: data, pagination });
    }
    case types.POSTS_PAGE_CHANGE: {
      const pagination = {
        current: action.page,
        size: state.pagination.size,
        count: state.pagination.count
      };

      return assign({}, state, { pagination });
    }
    case types.POSTS_FILTER_CHANGE:
      return assign({}, state, { filter: action.filter });
    case likeTypes.LIKE_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case likeTypes.LIKE_POST_ERROR:
      return assign({}, state, { error: true });
    case likeTypes.LIKE_POST_SUCCESS: {
      const items = cloneDeep(state.entries);
      const item = find(items, ['id', +action.response.id]);
      if (item) {
        item.metadata.likesCount = action.response.metadata.likesCount;
        return assign({}, state, { entries: items });
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
