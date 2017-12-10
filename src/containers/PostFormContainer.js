import { connect } from 'react-redux';
import { get } from 'lodash';

import PostForm from 'components/PostForm';

const stateToProps = (state) => ({
  initialValues: {
    id: get(state, 'post.entry.id'),
    text: get(state, 'post.entry.text'),
    author: get(state, 'post.entry.metadata.author'),
    createdAt: get(state, 'post.entry.metadata.createdAt'),
  },
  enableReinitialize: true,
});

export default connect(stateToProps)(PostForm);
