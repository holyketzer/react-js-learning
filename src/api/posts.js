import request from 'superagent';

const apiEndpoint = 'http://localhost:3001/';

const fetchPosts = (onLoad) => {
  request.get(
    apiEndpoint,
    {},
    (err, res) => { onLoad(res.body); }
  );
};

export { fetchPosts };
