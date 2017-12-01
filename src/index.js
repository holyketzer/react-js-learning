import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

import '../semantic/dist/semantic.min.css';
import 'styles/app.css';

const rootElement = document.getElementById('app');

ReactDOM.hydrate(
  <AppContainer>
    <App />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    ReactDOM.hydrate(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootElement
    );
  });
}
