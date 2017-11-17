import { connect } from 'react-redux';

import Posts from 'components/Posts';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
});

export default  connect(stateToProps)(Posts);
