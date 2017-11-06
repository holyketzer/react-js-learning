import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Like = ({ onClick, likesCount }) => (
  <div>
    Likes: <strong>{likesCount}</strong>
    &nbsp;
    <Button onClick={onClick}>Like</Button>
  </div>
);

Like.propTypes = {
  likesCount: PropTypes.number,
};

export default Like;
