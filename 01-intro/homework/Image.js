const Image = ({ src, width, height, alt }) => (
  DOM.img({ src, width, height, alt })
)

Image.defaultProps = {
  width: 300,
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
}
