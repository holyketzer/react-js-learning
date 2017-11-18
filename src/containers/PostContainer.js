import { connect } from 'react-redux';

import Post from 'components/Post';
import { handleLike } from 'actions/Post';

const stateToProps = (state) => ({
  item: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error,
});

const actionsToProps = (dispatch, props) => ({
  onLike: () => dispatch(handleLike(props.match.params.id))
});

export default connect(stateToProps, actionsToProps)(Post);
