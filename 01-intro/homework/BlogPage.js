const items = [
  {
    id: 10,
    text: 'About cats',
    image: {
      src: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_640.png',
      alt: 'Cat',
    },
    metadata: {
      author: 'Ivan Ivanov',
      createdAt: new Date(),
      updatedAt: new Date(),
      likesCount: 10,
    }
  },
  {
    id: 12,
    text: 'About big cats',
    image: {
      src: 'http://www.mybligr.com/wp-content/uploads/2017/01/most-beautiful-tiger-animals-pics-images-photos-pictures-6.jpg',
      alt: 'Tiger',
    },
    metadata: {
      author: 'Admin',
      createdAt: new Date(2016, 1, 1),
      updatedAt: new Date(2016, 1, 1),
      likesCount: 5,
    }
  },
  {
    id: 13,
    text: 'About Tesla',
    image: {
      src: 'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/01/03164223/rexfeatures_7455108a-800x533.jpg',
      alt: 'Lightning',
    },
    metadata: {
      author: 'SuperAdmin',
      createdAt: new Date(),
      updatedAt: new Date(),
      likesCount: 3,
    }
  },
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { items: props.items };
    this.like = bind(this.like, this);
  }

  like(post_id) {
    this.setState((prevState) => {
      const item = _.find(prevState.items, ['id', post_id]);
      item.metadata.likesCount += 1;
      // Обновляется стейт целиком, где функциональный стиль, как сделать по нормальному?
      return { items: prevState.items }
    });
  }

  render() {
    const { items } = this.state;
    const columns = _.map(items, (item) => [item.text, item.metadata.likesCount]);

    return (
      <div>
        <BlogList items={items} onLike={this.like}/>
        <PieChart columns={columns}/>
      </div>
    )
  }
}
