import React from 'react';
import moment from 'moment';
import { Label } from 'semantic-ui-react';

const TimeStamp = ({ time, format, children }) => (
  <div>
    <Label>
      {children}
      <Label.Detail>{moment(time).format(format)}</Label.Detail>
    </Label>
  </div>
);

TimeStamp.defaultProps = {
  format: 'MMMM Do YYYY h:mm',
};

export default TimeStamp;
