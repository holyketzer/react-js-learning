import { connect } from 'react-redux';

import Posts from 'components/Posts';
import { handleFilterChange } from 'actions/Posts';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
});

const actionsToProps = (dispatch) => ({
  onFilterChange: (filter) => dispatch(handleFilterChange(filter))
});

export default connect(stateToProps, actionsToProps)(Posts);
