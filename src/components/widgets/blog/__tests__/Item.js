import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { fakeStore } from 'helpers/fakeStore';

// import Link from 'components/widgets/blog/elements/Link';
import Item from '../Item';

describe('Item', () => {
  it('renders', () => {
    const div = document.createElement('div');
    const store = fakeStore({  });

    ReactDOM.render(
      (
        <MemoryRouter>
          <Provider store={store}>
            <Item />
          </Provider>
        </MemoryRouter>
      ),
      div
    );
  });
});
