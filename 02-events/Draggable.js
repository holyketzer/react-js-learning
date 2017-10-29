const { DOM, PropTypes } = React;
const { bind } = _;

const Image = ({ src, width, height, alt }) => (
  DOM.img({ src, width, height, alt })
)

Image.defaultProps = {
  width: 300,
}

class Draggable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: 0, top: 0, drag: false };

    this.handleMouseDown = bind(this.handleMouseDown, this);
    this.handleMouseMove = bind(this.handleMouseMove, this);
  }

  handleMouseDown(e) {
    this.setState({
      drag: !this.state.drag,
      startX: e.screenX,
      startY: e.screenY,
    });
  }

  handleMouseMove(e) {
    if (this.state.drag) {
      x = e.screenX - this.state.startX;
      y = e.screenY - this.state.startY;

      this.setState({
        left: this.state.left + x,
        top: this.state.top + y,
        startX: e.screenX,
        startY: e.screenY,
      });
    }
  }

  render() {
    const { left, top } = this.state;

    return (
      <div
        style={{ left, top, position: 'absolute' }}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
      >
      <div>Click, move mouse, click again to stop</div>
      {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  React.createElement(
    Draggable,
    {},
    React.createElement(
      Image,
      { src: 'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/01/03164223/rexfeatures_7455108a-800x533.jpg' }
    ),
  ),
  document.getElementById('app')
);

