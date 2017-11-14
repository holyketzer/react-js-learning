import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ onChange }) => (
  <div className='ui icon input'>
    <input type='text' placeholder='Search...' onChange={onChange} />
    <i className='search icon'></i>
  </div>
);

SearchField.propTypes = {
  onChange: PropTypes.func,
};

export default SearchField;
