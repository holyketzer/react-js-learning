const DOM = React.DOM;

const BlogList = ({ items }) => (
  DOM.div(
    null,
    _.map(
      items,
      (item, key) => {
        console.log(key);
        return React.createElement(BlogItem, Object.assign(item, { key }));
      }
    )
  )
)

ReactDOM.render(
  React.createElement(BlogList, { items: [
    {
      text: 'About cats',
      image: {
        src: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_640.png',
        alt: 'Cat',
      }
    },
    {
      text: 'About big cats',
      image: {
        src: 'http://www.mybligr.com/wp-content/uploads/2017/01/most-beautiful-tiger-animals-pics-images-photos-pictures-6.jpg',
        alt: 'Tiger',
      }
    },
    {
      text: 'About Tesla',
      image: {
        src: 'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/01/03164223/rexfeatures_7455108a-800x533.jpg',
        alt: 'Lightning',
      }
    },
  ]}),
  document.getElementById('app')
);


