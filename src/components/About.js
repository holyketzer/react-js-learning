import React from 'react';
import { Header } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import Image from 'components/widgets/blog/elements/Image';

const About = () => (
  <div>
    <Helmet title='About'>
      <meta name='description' content='About this blog' />
    </Helmet>
    <Header>
      This is a SuperBlog was maden for React.js learning
    </Header>
    <Image
      width={400}
      src='about.jpeg'
    />
  </div>
);

export default About;
