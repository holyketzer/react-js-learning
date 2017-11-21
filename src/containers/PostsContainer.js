import { connect } from 'react-redux';

import Posts from 'components/Posts';
import { postsPageChange, handleFilterChange } from 'actions/Posts';

const stateToProps = (state) => ({
  items: state.posts.entries,
  pagination: state.posts.pagination,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
});

const actionsToProps = (dispatch) => ({
  onPageChange: (page) => dispatch(postsPageChange(page)),
  onFilterChange: (filter) => dispatch(handleFilterChange(filter))
});

export default connect(stateToProps, actionsToProps)(Posts);
