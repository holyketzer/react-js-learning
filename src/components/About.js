import React from 'react';
import { Header } from 'semantic-ui-react';
import Image from 'components/widgets/blog/elements/Image';

const About = () => (
  <div>
    <Header>
      This is a SuperBlog was maden for React.js learning
    </Header>
    <Image
      width={400}
      src='/dist/images/about.jpeg'
    />
  </div>
);

export default About;
