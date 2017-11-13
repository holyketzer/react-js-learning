import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes, { RouteWithSubRoutes } from 'routes';

import MainLayout from 'components/layouts/MainLayout';

const App = () => (
  <Router>
    <MainLayout>
      {
        routes.map(
          (route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          )
        )
      }
    </MainLayout>
  </Router>
);

export default App;
