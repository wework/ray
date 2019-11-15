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
      mount(
        <List
          showAvatar={true}
          items={[{ header: 'header', content: 'content', icon: '' }]}
        />
      )
    ).toMatchSnapshot();
  });
});
