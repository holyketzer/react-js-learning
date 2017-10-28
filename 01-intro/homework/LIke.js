class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likesCount: props.likesCount };
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick() {
    this.setState({ likesCount: this.state.likesCount + 1 });
  }

  render() {
    return (
      <div>
        Likes: <strong>{this.state.likesCount}</strong>
        &nbsp;
        <button onClick={this.handleClick}>Like</button>
      </div>
    )
  }
}

Like.propTypes = {
  likesCount: PropTypes.number,
}
