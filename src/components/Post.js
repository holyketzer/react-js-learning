import React from 'react';
import PropTypes from 'prop-types';
import { Item, Segment } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import BlogItem from 'components/widgets/blog/Item';

const Post = ({ item }) => {
  if (item) {
    return (
      <div>
        <Helmet title={item.text}>
          <meta name='description' content='SEO content goes here' />
        </Helmet>
        <Item.Group>
          <BlogItem {...item} />
        </Item.Group>
      </div>
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
