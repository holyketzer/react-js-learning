import React from 'react';
import _ from 'lodash';

import { items as staticItems } from 'constants/static/items';
import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: staticItems };
    this.like = _.bind(this.like, this);
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
