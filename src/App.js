import React from 'react';
import ReactDOM from 'react-dom';
import routes, { Routes } from 'routes';
import { Provider } from 'react-redux';
import { matchPath, Router } from 'react-router';
import { assign } from 'lodash';
import { parse } from 'qs';

import createStore from 'store';
import history from 'helpers/history';
import prepareData from 'helpers/prepareData';

import DevTools from 'containers/DevTools';

const store = createStore(window.__INITIAL_STATE__);

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
      <Routes />
    </Router>
  </Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools'),
  () => { delete window.__INITIAL_STATE__; }
);

export default App;
