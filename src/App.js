import React from 'react';
import ReactDOM from 'react-dom';
import routes, { RouteWithSubRoutes } from 'routes';
import { Provider } from 'react-redux';
import { matchPath, Router } from 'react-router';
import { assign } from 'lodash';
import { parse } from 'qs';

import MainLayout from 'components/layouts/MainLayout';
import store from 'store';
import history from 'helpers/history';
import prepareData from 'helpers/prepareData';

import DevTools from 'containers/DevTools';

function historyCallback(location) {
  const state = { params: {}, routes: [] };

  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match)
    {
      state.routes.push(route);
      assign(state.params, match.params);
      assign(state.query, parse(location.search.substr(1)));
      prepareData(store, state);
    }
    return match;
  });
}

history.listen(historyCallback);

historyCallback(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
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
  </Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);

export default App;
