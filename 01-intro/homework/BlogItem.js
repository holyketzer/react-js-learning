const BlogItem = ({ text, image }) => (
  DOM.div(
    null,
    React.createElement(TextBox, null, text),
    React.createElement(Image, image),
  )
)
