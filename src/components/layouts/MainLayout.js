import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/widgets/blog/elements/Link';
import { Button, Segment, Header, Container } from 'semantic-ui-react';
import { aboutPath, contactsPath, rootPath } from 'helpers/routes';
import { withRouter } from 'react-router-dom';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const Logo = () => (
  <Segment>
    <Header className='header-menu'>
      <Link to={rootPath()}>Super React.js blog</Link>
      <Link to={aboutPath()}>About</Link>
      <Link to={contactsPath()}>Contacts</Link>
    </Header>
  </Segment>
);

const GoBackButton = withRouter(
  ({ history }) => (
    <Button onClick={history.goBack}>Назад</Button>
  )
);

const Footer = () => (
  <Segment>
    <GoBackButton />
    Powered by React.js
  </Segment>
);

export default MainLayout;
