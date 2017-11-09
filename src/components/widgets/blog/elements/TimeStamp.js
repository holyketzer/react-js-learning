import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Label } from 'semantic-ui-react';

const TimeStamp = ({ time, format, children }) => (
  <div style={{ marginTop: '5px', marginBottom: '5px' }}>
    <Label>
      {children}
      <Label.Detail>{moment(time).format(format)}</Label.Detail>
    </Label>
  </div>
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
