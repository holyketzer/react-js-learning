import request from 'superagent';
import { stringify } from 'qs';
import { assign, pick } from 'lodash';

import { API_ROOT } from 'constants/API';

export const API_CALL = 'API_CALL';

function APICall({ endpoint, method, query, payload }) {
  return new Promise((resolve, reject) => {
    const req = request[method.toLowerCase()](
      `${API_ROOT}${endpoint}`
    );

    if (query) {
      req.query(stringify(query));
    }

    if (payload) {
      req.send(payload);
    }

    req.end((error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.body);
      }
    });
  });
}

const nextAction = (action, data) => (
  assign({}, action, data, { [API_CALL]: undefined })
);

export default (store) => (next) => (action) => { // eslint-disable-line no-unused-vars
  const apiCallAction = action[API_CALL];

  if (apiCallAction) {
    const [requestType, successType, failureType] = apiCallAction.types;

    next(nextAction(action, { type: requestType, filter: apiCallAction.query.filter }));

    const promise = APICall(
      pick(
        apiCallAction,
        ['endpoint', 'method', 'action', 'query', 'payload']
      )
    );

    promise.then(
      (response) => next(
        nextAction(action, { response, type: successType })
      ),
      (error) => next(
        nextAction(action, { error, type: failureType })
      )
    );

    return promise;
  } else {
    return next(action);
  }
};
