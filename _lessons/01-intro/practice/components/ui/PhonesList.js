import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';
import _ from 'lodash';

const PhonesList = ({ phones }) => (
  DOM.ul(
    null,
    _.map(
      phones,
      (phone, key) => (
        DOM.li({ key }, `${phone.name} (${phone.phone})`)
      )
    )
  )
)

export default PhonesList;
