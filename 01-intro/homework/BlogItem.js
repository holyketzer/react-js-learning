const BlogItem = ({ text, image, metadata }) => {
  const { author, created_at, updated_at, likesCount } = metadata;

  return DOM.div(
    { style: { margin: '10px' } },
    React.createElement(TextBox, { fontWeight: 'bold' }, text),
    React.createElement(TextBox, { fontSize: '16px' }, `Автор ${author}`),
    React.createElement(Image, image),
    React.createElement(TimeStamp, { fontSize: '16px', time: created_at }, 'Создано:'),
    React.createElement(TimeStamp, { fontSize: '16px', time: updated_at }, 'Изменено:'),
    React.createElement(Like, { likesCount })
  )
}

BlogItem.propTypes = {
  text: PropTypes.string,
  image: PropTypes.object,
  metadata: PropTypes.object,
}
