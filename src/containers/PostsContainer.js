import { connect } from 'react-redux';
import { assign } from 'lodash';

import Posts from 'components/Posts';
import { handleFilterChange } from 'actions/Posts';

const stateToProps = (state) => ({
  pagination: state.posts.pagination,
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
});

const actionsToProps = (dispatch) => ({
  onFilterChange: (page, pageSize) => (filter) => dispatch(
    handleFilterChange({filter, page, pageSize})
  )
});

const mergeProps = (stateProps, dispatchProps) => (
  assign({}, stateProps, {
    onFilterChange: dispatchProps.onFilterChange(
      stateProps.pagination.current,
      stateProps.pagination.size
    )
  })
);

export default connect(stateToProps, actionsToProps, mergeProps)(Posts);
