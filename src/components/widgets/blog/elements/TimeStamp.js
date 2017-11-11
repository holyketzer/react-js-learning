import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Label from 'components/widgets/blog/elements/Label';

const TimeStamp = ({ time, format, children }) => (
  <Label name={children}>
    {moment(time).format(format)}
  </Label>
);

TimeStamp.defaultProps = {
  format: 'MMMM Do YYYY h:mm',
};

TimeStamp.propTypes = {
  children: PropTypes.string,
  format: PropTypes.string,
  time: PropTypes.instanceOf(Date),
};

export default TimeStamp;
