import { compact } from 'lodash/array';
import { map, filter } from 'lodash/collection';

export default function(store, state) {
  const { query, params, routes } = state;

  const prepareDataFns = compact(map(routes, route => route.prepareData));

  const values = map(
    prepareDataFns,
    prepareData => prepareData(store, query, params)
  );

  const promises = filter(values);
  return Promise.all(promises);
}
