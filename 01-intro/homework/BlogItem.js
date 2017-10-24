const BlogItem = ({ text, image }) => (
  DOM.div(
    null,
    [
      React.createElement(TextBox, { text, key: 'text' }),
      React.createElement(Image, Object.assign(image, { key: 'image' })),
    ]
  )
)
