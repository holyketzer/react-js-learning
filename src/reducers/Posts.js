import _ from 'lodash';

import * as types from 'constants/actionTypes/PostsActionTypes';


const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return _.assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return _.assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return _.assign({}, initialState, { entries: action.response });
    case types.INCREMENT_POSTS_LIKES: {
      const items = _.cloneDeep(state.entries);
      const item = _.find(items, ['id', action.id]);
      item.metadata.likesCount += 1;
      return _.assign({}, initialState, { entries: items });
    }
    default:
      return state;
  }
}
