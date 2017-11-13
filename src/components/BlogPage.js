import React from 'react';
import _ from 'lodash';

import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import { fetchPosts } from 'api/posts';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.like = _.bind(this.like, this);
  }

  componentDidMount() {
    fetchPosts((res) => this.setState({ items: res }));
  }

  like(postId) {
    const items = _.cloneDeep(this.state.items);
    const item = _.find(items, ['id', postId]);
    item.metadata.likesCount += 1;
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    const columns = _.map(items, (item) => [item.text, item.metadata.likesCount]);

    return (
      <div>
        <BlogList items={items} onLike={this.like}/>
        <PieChart columns={columns}/>
      </div>
    );    
  }
}

export default BlogPage;
