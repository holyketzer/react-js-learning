import React from 'react';
import PropTypes from 'prop-types';
import { bind, map } from 'lodash';
import Helmet from 'react-helmet';

import BlogList from 'components/widgets/blog/List';
import PaginationContainer from 'containers/PaginationContainer';
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
        <Helmet title='Список постов'>
          <meta name='description' content='SEO content goes here' />
        </Helmet>

        <div className="eight wide column">
          <SearchField onChange={this.onSearchChange} />
          <BlogList items={this.props.items} />
          <PaginationContainer />
        </div>
        <div className="eight wide column">
          <PieChart columns={columns} />
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  items: PropTypes.array,
  pagination: PropTypes.object,
  onPageChange: PropTypes.func,
  onFilterChange: PropTypes.func
};

export default Posts;
