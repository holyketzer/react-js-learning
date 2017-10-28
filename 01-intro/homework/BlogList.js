const DOM = React.DOM;

function NoItemsException() {
   this.message = "Items required";
   this.name = "NoItemsException";
}

const BlogList = ({ items }) => {
  if (items === undefined) {
     throw new NoItemsException();
  }

  const list = _.map(
    items,
    (item, key) => (
      React.createElement(BlogItem, _.assign(item, { key }))
    )
  );

  return DOM.div(null, list);
};

BlogList.propTypes = {
  items: PropTypes.array,
}

const items = [
  {
    text: 'About cats',
    image: {
      src: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_640.png',
      alt: 'Cat',
    },
    metadata: {
      author: 'Ivan Ivanov',
      created_at: new Date(),
      updated_at: new Date(),
      likesCount: 10,
    }
  },
  {
    text: 'About big cats',
    image: {
      src: 'http://www.mybligr.com/wp-content/uploads/2017/01/most-beautiful-tiger-animals-pics-images-photos-pictures-6.jpg',
      alt: 'Tiger',
    },
    metadata: {
      author: 'Admin',
      created_at: new Date(),
      updated_at: new Date(),
      likesCount: 5,
    }
  },
  {
    text: 'About Tesla',
    image: {
      src: 'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/01/03164223/rexfeatures_7455108a-800x533.jpg',
      alt: 'Lightning',
    },
    metadata: {
      author: 'SuperAdmin',
      created_at: new Date(),
      updated_at: new Date(),
      likesCount: 3,
    }
  },
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { items: props.items };
  }

  render() {
    const { items } = this.state;
    return React.createElement(BlogList, { items });
  }
}

ReactDOM.render(
  React.createElement(BlogPage, { items }),
  document.getElementById('app')
);
