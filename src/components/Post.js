import React from 'react';
import PropTypes from 'prop-types';
import { Item, Segment } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/Item';

const Post = ({ item, onLike }) => {
  if (item) {
    return (
      <Item.Group>
        <BlogItem {...item} onLike={onLike} />
      </Item.Group>
    );
  }
  else
  {
    return (
      <Segment>Post not found</Segment>
    );
  }
};

Post.propTypes = {
  item: PropTypes.object,
  onLike: PropTypes.func
};

export default Post;
