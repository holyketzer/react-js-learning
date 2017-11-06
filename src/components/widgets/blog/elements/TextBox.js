import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

const TextBox = ({ style, children }) => {
  const { fontSize, fontWeight } = style;
  return DOM.span({ style: { display: 'block', fontSize, fontWeight }, children });
};

TextBox.defaultProps = {
  style: {
    fontSize: '16px',
    fontWeight: 'normal',
  }
};

TextBox.propTypes = {
  children: PropTypes.string,
  style: PropTypes.shape({
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
  }),
};

export default TextBox;
