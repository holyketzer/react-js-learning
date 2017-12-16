import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const Like = ({ onLike, likesCount, postId }) => (
  <div className='block-item like'>
    <Button onClick={() => onLike(postId)}>
      <Icon name='like' />
      <span>{likesCount}</span>
    </Button>
  </div>
);

Like.propTypes = {
  likesCount: PropTypes.number,
  onLike: PropTypes.func,
  postId: PropTypes.number
};

export default Like;
