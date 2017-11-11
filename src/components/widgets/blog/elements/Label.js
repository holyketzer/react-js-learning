import React from 'react';
import PropTypes from 'prop-types';
import { Label as SemanticLabel } from 'semantic-ui-react';

const Label = ({ name, children }) => (
  <div className='block-item'>
    <SemanticLabel>
      {name}
      <SemanticLabel.Detail>{children}</SemanticLabel.Detail>
    </SemanticLabel>
  </div>
);

Label.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
};

export default Label;
