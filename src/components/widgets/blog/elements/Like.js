import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const Like = ({ onClick, likesCount }) => (
  <div className='block-item'>
    <Button onClick={onClick}>
      <Icon name='like' /> {likesCount}
    </Button>
  </div>
);

Like.propTypes = {
  likesCount: PropTypes.number,
  onClick: PropTypes.func,
};

export default Like;
