import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from 'containers/DevTools';
import reducers from 'reducers';

import APIMiddleware from 'middleware/API';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware), 
    DevTools.instrument()
  )
);

export default store;
