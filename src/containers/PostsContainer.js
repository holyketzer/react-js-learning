import { connect } from 'react-redux';

import Posts from 'components/Posts';
import { handleLike } from 'actions/Post';
import { postsPageChange, handleFilterChange } from 'actions/Posts';

const stateToProps = (state) => ({
  items: state.posts.entries,
  pagination: state.posts.pagination,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
});

const actionsToProps = (dispatch) => ({
  onLike: (id) => dispatch(handleLike(id)),
  onPageChange: (page) => dispatch(postsPageChange(page)),
  onFilterChange: (filter) => dispatch(handleFilterChange(filter))
});

export default  connect(stateToProps, actionsToProps)(Posts);
