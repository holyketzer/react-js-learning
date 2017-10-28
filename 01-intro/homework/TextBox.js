const TextBox = ({ fontSize, fontWeight, children }) => (
  DOM.span({ style: {display: 'block', fontSize, fontWeight }, children })
)

TextBox.defaultProps = {
  fontSize: '20px',
  fontWeight: 'normal',
}

TextBox.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
}
