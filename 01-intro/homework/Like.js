const Like = ({ onLike, likesCount }) => (
  <div>
    Likes: <strong>{likesCount}</strong>
    &nbsp;
    <button onClick={onLike}>Like</button>
  </div>
)

Like.propTypes = {
  likesCount: PropTypes.number,
}
