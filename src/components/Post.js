import React from 'react';
import PropTypes from 'prop-types';
import { Item, Segment } from 'semantic-ui-react';
import _ from 'lodash';

import BlogItem from 'components/widgets/blog/Item';
import { fetchPosts } from 'api/posts';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: null };
    this.like = _.bind(this.like, this);
  }

  componentDidMount() {
    fetchPosts((items) => {
      const item = _.find(items, ['id', +this.props.match.params.id]);
      this.setState({ item });
    });
  }

  like() {
    const item = _.cloneDeep(this.state.item);
    item.metadata.likesCount += 1;
    this.setState({ item });
  }

  render() {
    if (this.state.item) {
      return (
        <Item.Group>
          <BlogItem {...this.state.item} onLike={this.like} />
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
  match: PropTypes.object
};

export default Post;
