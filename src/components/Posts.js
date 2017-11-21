import React from 'react';
import PropTypes from 'prop-types';
import { bind, map } from 'lodash';

import BlogList from 'components/widgets/blog/List';
import Paginator from 'components/widgets/blog/Paginator';
import PieChart from 'components/widgets/blog/PieChart';
import SearchField from 'components/widgets/blog/elements/SearchField';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchChange = bind(this.onSearchChange, this);
  }

  onSearchChange(event) {
    this.props.onFilterChange(event.target.value);
  }

  render() {
    const columns = map(
      this.props.items,
      (item) => [item.text, item.metadata.likesCount]
    );

    return (
      <div className='ui grid'>
        <div className="eight wide column">
          <SearchField onChange={this.onSearchChange} />
          <BlogList items={this.props.items} onLike={this.props.onLike}/>
          <Paginator
            pageCount={this.props.pagination.count}
            currentPage={this.props.pagination.current}
            onChange={this.props.onPageChange}
          />
        </div>
        <div className="eight wide column">
          <PieChart columns={columns}/>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  items: PropTypes.array,
  pagination: PropTypes.object,
  onPageChange: PropTypes.func,
  onLike: PropTypes.func,
  onFilterChange: PropTypes.func
};

export default Posts;
