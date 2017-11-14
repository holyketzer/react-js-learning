import React from 'react';
import { Route } from 'react-router-dom';

import About from 'components/About';
import BlogPage from 'components/BlogPage';
import Post from 'components/Post';
import { aboutPath, rootPath, postPath } from 'helpers/routes';

const routes = [
  {
    path: postPath(),
    component: Post,
  },
  {
    path: rootPath(),
    component: BlogPage,
  },
  {
    path: aboutPath(),
    component: About,
  }
];

export default routes;

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route exact path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
);

export { RouteWithSubRoutes };
