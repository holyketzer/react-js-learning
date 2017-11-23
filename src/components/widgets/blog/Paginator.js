import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';
import { Segment } from 'semantic-ui-react';

const Paginator = ({ currentPage, pageCount, onPageChange }) => {
  const list = Array.apply(null, { length: pageCount }).map((_, index) => {
    const pageNumber = index + 1;

    if (pageNumber == currentPage) {
      return DOM.span(
        { key: pageNumber },
        String(pageNumber)
      );
    } else {
      return DOM.a(
        {
          href: '#',
          key: pageNumber,
          onClick: () => onPageChange(pageNumber),
        },
        String(pageNumber)
      );
    }
  });

  return React.createElement(Segment, { className: 'paginator' }, list);
};

Paginator.propTypes = {
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default Paginator;
