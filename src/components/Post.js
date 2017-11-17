import React from 'react';
import PropTypes from 'prop-types';
import { Item, Segment } from 'semantic-ui-react';
import _ from 'lodash';

import BlogItem from 'components/widgets/blog/Item';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.like = _.bind(this.like, this);
  }

  like() {
    const item = _.cloneDeep(this.state.item);
    item.metadata.likesCount += 1;
    this.setState({ item });
  }

  render() {
    if (this.props.item) {
      return (
        <Item.Group>
          <BlogItem {...this.props.item} onLike={this.like} />
        </Item.Group>
      );
    }
    else
    {
      return (
        <Segment>Post not found</Segment>
      );
    }
  }
}

Post.propTypes = {
  match: PropTypes.object,
  item: PropTypes.object
};

export default Post;
