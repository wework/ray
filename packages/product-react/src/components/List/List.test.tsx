import Enzyme, { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { List } from './List';

configure({ adapter: new Adapter() });

describe('List', () => {
  let component: ReactWrapper<any>;

  beforeEach(() => {
    component = mount(<List items={[{}]} />);
  });

  test('should match snapshot and styles', () => {
    expect(
      mount(<List items={[{ header: 'header', content: 'content' }]} />),
    ).toMatchSnapshot();
  });

  describe('Functions', () => {
    it('onFocus', () => {
      component = Enzyme.mount(
        <List
          items={[
            {
              header: 'Sammy Lawson',
              content: 'Product Designer',
              icon: 'laalalalaaal',
            },
            {
              header: 'Arnold Schwarzenegger',
              content: 'Product Designer',
              icon: 'laalalalaaal',
            },
            {
              header: 'Michael Jordan',
              content: 'Product Designer',
              icon: 'laalalalaaallaalalalaaal',
            },
          ]}
        />,
      );
    });
  });
});
