import { connect } from 'react-redux';

import Post from 'components/Post';

const stateToProps = (state) => ({
  item: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error,
});

export default connect(stateToProps)(Post);
