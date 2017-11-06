import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

const Image = ({ src, width, height, alt }) => (
  DOM.img({ src, width, height, alt })
);

Image.defaultProps = {
  width: 300,
};

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

export default Image;
