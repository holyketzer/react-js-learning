import React from 'react';
import PropTypes from 'prop-types';
import { Header, Label } from 'semantic-ui-react';

import Like from 'components/widgets/blog/elements/Like';
import Image from 'components/widgets/blog/elements/Image';
import TimeStamp from 'components/widgets/blog/elements/TimeStamp';

const BlogItem = ({ id, text, image, metadata, onLike }) => {
  const { author, createdAt, updatedAt, likesCount } = metadata;

  return (
    <div style={{ margin: '10px' }}>
      <Header>{text}</Header>
      <div>
        <Label>
          Автор
          <Label.Detail>{author}</Label.Detail>
        </Label>
      </div>
      <Image {...image}/>
      <TimeStamp time={createdAt}>Создано:</TimeStamp>
      <TimeStamp time={updatedAt}>Изменено:</TimeStamp>
      <Like onClick={ () => onLike(id) } likesCount={likesCount} />
    </div>
  );
};

BlogItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  image: PropTypes.object,
  metadata: PropTypes.object,
  onLike: PropTypes.func,
};

export default BlogItem;
