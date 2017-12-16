import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';

import { fakeStore } from 'helpers/fakeStore';

// import Link from 'components/widgets/blog/elements/Link';
import BlogItem from '../Item';

configure({ adapter: new Adapter() });

describe('Item', () => {
  it('renders', () => {
    const div = document.createElement('div');
    const store = fakeStore({  });

    ReactDOM.render(
      (
        <MemoryRouter>
          <Provider store={store}>
            <BlogItem />
          </Provider>
        </MemoryRouter>
      ),
      div
    );
  });

  it('renders content', () => {
    const props = {
      text: 'hi from blog',
      metadata: {
        author: 'Admin',
      }
    };

    const blogItem = shallow(<BlogItem {...props}/>);

    expect(blogItem.contains(props.text)).toEqual(true);
    expect(blogItem.contains(props.metadata.author)).toEqual(true);
  });
});
