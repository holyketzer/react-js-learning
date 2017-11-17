import _ from 'lodash';

import * as types from 'constants/actionTypes/PostActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return _.assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return _.assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return _.assign({}, initialState, { entry: action.response });
    default:
      return state;
  }
}
