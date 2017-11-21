import React from 'react';
import PropTypes from 'prop-types';
import { Item, Segment } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/Item';

const Post = ({ item }) => {
  if (item) {
    return (
      <Item.Group>
        <BlogItem {...item} />
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
};

export default Post;
