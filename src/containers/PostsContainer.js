import { connect } from 'react-redux';

import Posts from 'components/Posts';
import { handleLike } from 'actions/Posts';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
});

const actionsToProps = (dispatch) => ({
  onLike: (id) => dispatch(handleLike(id))
});


export default  connect(stateToProps, actionsToProps)(Posts);
