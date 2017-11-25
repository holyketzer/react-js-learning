import { assign, cloneDeep, find } from 'lodash';

import { INCREMENT_POST_LIKES } from 'constants/actionTypes/PostActionTypes';
import * as types from 'constants/actionTypes/PostsActionTypes';

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
    case INCREMENT_POST_LIKES: {
      const items = cloneDeep(state.entries);
      const item = find(items, ['id', +action.id]);
      if (item) {
        item.metadata.likesCount += 1;
        return assign({}, state, { entries: items });
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
