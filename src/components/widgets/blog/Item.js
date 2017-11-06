import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import Like from 'components/widgets/blog/elements/Like';
import Image from 'components/widgets/blog/elements/Image';
import TextBox from 'components/widgets/blog/elements/TextBox';
import TimeStamp from 'components/widgets/blog/elements/TimeStamp';

const BlogItem = ({ id, text, image, metadata, onLike }) => {
  const { author, createdAt, updatedAt, likesCount } = metadata;

  return DOM.div(
    { style: { margin: '10px' } },
    React.createElement(TextBox, { style: { fontSize: '20px', fontWeight: 'bold' } }, text),
    React.createElement(TextBox, { }, `Автор ${author}`),
    React.createElement(Image, image),
    React.createElement(TimeStamp, { time: createdAt }, 'Создано:'),
    React.createElement(TimeStamp, { time: updatedAt }, 'Изменено:'),
    React.createElement(Like, { likesCount, onClick: () => onLike(id) })
  );
};

BlogItem.propTypes = {
  text: PropTypes.string,
  image: PropTypes.object,
  metadata: PropTypes.object,
};

export default BlogItem;
