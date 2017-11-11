import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import Label from 'components/widgets/blog/elements/Label';
import Like from 'components/widgets/blog/elements/Like';
import Image from 'components/widgets/blog/elements/Image';
import TimeStamp from 'components/widgets/blog/elements/TimeStamp';

const BlogItem = ({ id, text, image, metadata, onLike }) => {
  const { author, createdAt, updatedAt, likesCount } = metadata;

  return (
    <div className='block'>
      <Header>{text}</Header>
      <Label name='Автор'>{author}</Label>
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
