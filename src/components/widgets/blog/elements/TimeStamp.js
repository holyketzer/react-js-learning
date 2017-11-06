import React from 'react';
import DOM from 'react-dom-factories';
import moment from 'moment';

const TimeStamp = ({ time, format, children }) => (
  DOM.span(
    { style: {display: 'block'}},
    `${children} ${moment(time).format(format)}`
  )
);

TimeStamp.defaultProps = {
  format: 'MMMM Do YYYY h:mm',
};

export default TimeStamp;
