const Like = ({ onClick, likesCount }) => (
  <div>
    Likes: <strong>{likesCount}</strong>
    &nbsp;
    <button onClick={onClick}>Like</button>
  </div>
)

Like.propTypes = {
  likesCount: PropTypes.number,
}
