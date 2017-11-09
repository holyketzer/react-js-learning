import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, width, height, alt }) => (
  <img
    src={src}
    width={width}
    height={height}
    alt={alt}
    className='block-item'
  />
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
