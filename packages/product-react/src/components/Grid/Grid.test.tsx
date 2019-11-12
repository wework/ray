import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Grid } from './Grid';

describe('Grid', () => {
  let component: ReactWrapper<any>;

  beforeEach(() => {
    component = mount(<Grid />);
  });

  test('should match snapshot and styles', () => {
    expect(component).toMatchSnapshot();
  });

  describe('default classes', () => {
    test('should contain default class', () => {
      expect(
        component
          .find('div')
          .at(0)
          .hasClass('ray-grid'),
      ).toBe(true);
    });
    test('should contain default class & contain extra class', () => {
      component.setProps({ className: 'foo' });
      const container = component.find('div').at(0);
      expect(container.hasClass('ray-grid')).toBe(true);
      expect(container.hasClass('foo')).toBe(true);
    });
    test('should accept "as" prop as string', () => {
      component.setProps({ as: 'main' });
      expect(component.find('div').length).toBe(0);
      expect(
        component
          .find('main')
          .at(0)
          .hasClass('ray-grid'),
      ).toBe(true);
    });
  });
});
