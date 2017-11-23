import { connect } from 'react-redux';

import Like from 'components/widgets/blog/elements/Like';
import { handleLike } from 'actions/Like';

const actionsToProps = (dispatch) => ({
  onLike: (id) => dispatch(handleLike(id))
});

export default connect(null, actionsToProps)(Like);
