import Enzyme, { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { Container } from './Container';

configure({ adapter: new Adapter() });

describe('Container', () => {
  let component: ReactWrapper<any>;

  beforeEach(() => {
    component = mount(<Container />);
  });

  test('should match snapshot and styles', () => {
    expect(component).toMatchSnapshot();
  });

  test('should contain default class & passed in className', () => {
    component.setProps({ className: 'foo' });
    const container = component.find('div').at(0);
    expect(container.hasClass('ray-page-container')).toBe(true);
    expect(container.hasClass('foo')).toBe(true);
  });

  test('should accept "as" prop for setting element', () => {
    component.setProps({ as: 'main' });
    expect(component.find('div').length).toBe(0);
    expect(
      component
        .find('main')
        .at(0)
        .hasClass('ray-page-container'),
    ).toBe(true);
  });

  test('should pass additional props to component', () => {
    component.setProps({ id: 'foo', 'data-info': 'bar' });
    const container = component.find('.ray-page-container').at(0);
    expect(container.prop('id')).toEqual('foo');
    expect(container.prop('data-info')).toEqual('bar');
  });

  describe('Defaults', () => {
    test('should contain default class', () => {
      expect(
        component
          .find('div')
          .at(0)
          .hasClass('ray-page-container'),
      ).toBe(true);
    });
  });

  describe('Justifying', () => {
    test('should add class to justify left', () => {
      component.setProps({ justify: 'left' });
      expect(
        component
          .find('.ray-page-container')
          .hasClass('ray-page-container—justify-left'),
      ).toBe(true);
    });
    test('should add class to justify center', () => {
      component.setProps({ justify: 'center' });
      expect(
        component
          .find('.ray-page-container')
          .hasClass('ray-page-container—justify-center'),
      ).toBe(true);
    });
    test('should add class to justify right', () => {
      component.setProps({ justify: 'right' });
      expect(
        component
          .find('.ray-page-container')
          .hasClass('ray-page-container—justify-right'),
      ).toBe(true);
    });
    test('should NOT add class to incorrect justify type', () => {
      component.setProps({ justify: 'notLeftCenterOrRight' });
      expect(
        component
          .find('.ray-page-container')
          .hasClass('ray-page-container—justify-left'),
      ).toBe(false);
      expect(
        component
          .find('.ray-page-container')
          .hasClass('ray-page-container—justify-center'),
      ).toBe(false);
      expect(
        component
          .find('.ray-page-container')
          .hasClass('ray-page-container—justify-right'),
      ).toBe(false);
    });
  });

  describe('Alignment', () => {
    test('should add class to align left', () => {
      component.setProps({ align: 'left' });
      expect(
        component
          .find('.ray-page-container')
          .hasClass('ray-page-container—align-left'),
      ).toBe(true);
    });
    test('should add class to align right', () => {
      component.setProps({ align: 'right' });
      expect(
        component
          .find('.ray-page-container')
          .hasClass('ray-page-container—align-right'),
      ).toBe(true);
    });
    test('should NOT add class to incorrect align type', () => {
      component.setProps({ align: 'notLeftOrRight' });
      expect(
        component
          .find('.ray-page-container')
          .hasClass('ray-page-container—align-left'),
      ).toBe(false);
      expect(
        component
          .find('.ray-page-container')
          .hasClass('ray-page-container—align-right'),
      ).toBe(false);
    });
  });

  describe('Fixed Left', () => {
    it('should add correct class when "fix" prop is true', () => {
      expect(
        component
          .find('.ray-page-container')
          .hasClass('lucia-page-container-fixed-left'),
      ).toBe(false);
      component.setProps({ fixed: true });
      expect(
        component
          .find('.ray-page-container')
          .hasClass('lucia-page-container-fixed-left'),
      ).toBe(true);
    });
  });
});
