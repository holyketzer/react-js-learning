import { connect } from 'react-redux';

import PostForm from 'components/PostForm';

const stateToProps = (state) => ({
  initialValues: {
    id: state.post.entry.id,
    text: state.post.entry.text,
    author: state.post.entry.metadata.author,
    createdAt: state.post.entry.metadata.createdAt,
  },
  enableReinitialize: true,
});

export default connect(stateToProps)(PostForm);
