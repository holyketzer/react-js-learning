import { connect } from 'react-redux';

import Paginator from 'components/widgets/blog/Paginator';
import { postsPageChange } from 'actions/Posts';

const stateToProps = (state) => ({
  pageCount: state.posts.pagination.count,
  currentPage: state.posts.pagination.current
});

const actionsToProps = (dispatch) => ({
  onPageChange: (page) => dispatch(postsPageChange(page)),
});

export default connect(stateToProps, actionsToProps)(Paginator);
