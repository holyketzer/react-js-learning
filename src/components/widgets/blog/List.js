import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';
import { assign, map } from 'lodash';

import BlogItem from 'components/widgets/blog/Item';

function NoItemsException() {
  this.message = 'Items required';
  this.name = 'NoItemsException';
}

const BlogList = ({ items }) => {
  if (items === undefined) {
    throw new NoItemsException();
  }

  const list = map(
    items,
    (item) => (
      React.createElement(BlogItem, assign(item, { key: item.id }))
    )
  );

  return DOM.div(null, list);
};

BlogList.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
};

export default BlogList;
