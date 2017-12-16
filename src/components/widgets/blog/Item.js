import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import Label from 'components/widgets/blog/elements/Label';
import LikeContainer from 'containers/LikeContainer';
import Link from 'components/widgets/blog/elements/Link';
import Image from 'components/widgets/blog/elements/Image';
import TimeStamp from 'components/widgets/blog/elements/TimeStamp';
import { postPath, editPostPath } from 'helpers/routes';

const BlogItem = ({ id, text, image, metadata }) => {
  const { author, createdAt, updatedAt, likesCount } = metadata;

  return (
    <div className='block'>
      <Header>
        <Link to={postPath(id)}>{text}</Link>
        <Link to={editPostPath(id)} className="ui button edit-button">Edit</Link>
      </Header>
      <Label name='Автор'>{author}</Label>
      <Link to={postPath(id)}>
        <Image {...image}/>
      </Link>
      <TimeStamp time={createdAt}>Создано:</TimeStamp>
      <TimeStamp time={updatedAt}>Изменено:</TimeStamp>
      <LikeContainer likesCount={likesCount} postId={id} />
    </div>
  );
};

BlogItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  image: PropTypes.object,
  metadata: PropTypes.object,
};

BlogItem.defaultProps = {
  metadata: {}
};

export default BlogItem;
