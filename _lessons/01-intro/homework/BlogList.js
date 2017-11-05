function NoItemsException() {
   this.message = "Items required";
   this.name = "NoItemsException";
}

const BlogList = ({ items, onLike }) => {
  if (items === undefined) {
     throw new NoItemsException();
  }

  const list = _.map(
    items,
    (item) => (
      React.createElement(BlogItem, _.assign(item, { key: item.id, onLike }))
    )
  );

  return DOM.div(null, list);
};

BlogList.propTypes = {
  items: PropTypes.array,
}
