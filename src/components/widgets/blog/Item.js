import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import Label from 'components/widgets/blog/elements/Label';
import Like from 'components/widgets/blog/elements/Like';
import Link from 'components/widgets/blog/elements/Link';
import Image from 'components/widgets/blog/elements/Image';
import TimeStamp from 'components/widgets/blog/elements/TimeStamp';
import { postPath } from 'helpers/routes';

const BlogItem = ({ id, text, image, metadata, onLike }) => {
  const { author, createdAt, updatedAt, likesCount } = metadata;

  return (
    <div className='block'>
      <Header>
        <Link to={postPath(id)}>{text}</Link>
      </Header>
      <Label name='Автор'>{author}</Label>
      <Link to={postPath(id)}>
        <Image {...image}/>
      </Link>
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
