import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import BlogList from 'components/widgets/blog/List';
import Paginator from 'components/widgets/blog/Paginator';
import PieChart from 'components/widgets/blog/PieChart';
import SearchField from 'components/widgets/blog/elements/SearchField';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = { page: 1, pageCount: 0 };
    this.like = _.bind(this.like, this);
    this.onPageChange = _.bind(this.onPageChange, this);
    this.onSearchChange = _.bind(this.onSearchChange, this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items) {
      const pageCount = Math.ceil(nextProps.items.length / this.props.pageSize);
      this.setState({ pageCount });
    }
  }

  like(postId) {
    const items = _.cloneDeep(this.state.items);
    const item = _.find(items, ['id', postId]);
    item.metadata.likesCount += 1;
    this.setState({ items });
  }

  onSearchChange(event) {
    this.setState({ filter: event.target.value });
  }

  onPageChange(page) {
    this.setState({ page });
  }

  render() {
    const items = this.paginateItems(this.filterItems(this.props.items));

    const columns = _.map(
      this.props.items,
      (item) => [item.text, item.metadata.likesCount]
    );

    return (
      <div className='ui grid'>
        <div className="eight wide column">
          <SearchField onChange={this.onSearchChange} />
          <BlogList items={items} onLike={this.like}/>
          <Paginator
            pageCount={this.state.pageCount}
            currentPage={this.state.page}
            onChange={this.onPageChange}
          />
        </div>
        <div className="eight wide column">
          <PieChart columns={columns}/>
        </div>
      </div>
    );
  }

  filterItems(items) {
    const filter = this.state.filter;

    return _.filter(
      items,
      (item) => {
        if (filter) {
          return item.text.toLowerCase().includes(filter.toLowerCase());
        } else {
          return true;
        }
      }
    );
  }

  paginateItems(items) {
    const from = (this.state.page - 1) * this.props.pageSize;
    const to = from + this.props.pageSize;

    return items.slice(from, to);
  }
}

Posts.defaultProps = {
  pageSize: 2
};

Posts.propTypes = {
  pageSize: PropTypes.number,
  items: PropTypes.array
};

export default Posts;
