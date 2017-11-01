const BlogItem = ({ id, text, image, metadata, onLike }) => {
  const { author, createdAt, updatedAt, likesCount } = metadata;

  const handleLike = () => ( onLike(id) )

  return DOM.div(
    { style: { margin: '10px' } },
    React.createElement(TextBox, { style: { fontSize: '20px', fontWeight: 'bold' } }, text),
    React.createElement(TextBox, { }, `Автор ${author}`),
    React.createElement(Image, image),
    React.createElement(TimeStamp, { time: createdAt }, 'Создано:'),
    React.createElement(TimeStamp, { time: updatedAt }, 'Изменено:'),
    React.createElement(Like, { likesCount, onLike: () => onLike(id) })
  )
}

BlogItem.propTypes = {
  text: PropTypes.string,
  image: PropTypes.object,
  metadata: PropTypes.object,
}
