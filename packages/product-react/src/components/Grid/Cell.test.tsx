import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Cell } from './Cell';

describe('Cell', () => {
  let component: ReactWrapper<any>;

  beforeEach(() => {
    component = mount(<Cell />);
  });

  test('should match snapshot and styles', () => {
    expect(component).toMatchSnapshot();
  });

  test('should contain default class & passed in className', () => {
    component.setProps({ className: 'foo' });
    const container = component.find('div').at(0);
    expect(container.hasClass('ray-grid__cell')).toBe(true);
    expect(container.hasClass('foo')).toBe(true);
  });

  test('should accept "as" prop for setting element', () => {
    component.setProps({ as: 'main' });
    expect(component.find('div').length).toBe(0);
    expect(
      component
        .find('main')
        .at(0)
        .hasClass('ray-grid__cell'),
    ).toBe(true);
  });
  test('should pass additional props to component', () => {
    component.setProps({ id: 'foo', 'data-info': 'bar' });
    const container = component.find('.ray-grid__cell').at(0);
    expect(container.prop('id')).toEqual('foo');
    expect(container.prop('data-info')).toEqual('bar');
  });

  describe('default classes', () => {
    test('should contain default class', () => {
      expect(
        component
          .find('div')
          .at(0)
          .hasClass('ray-grid__cell'),
      ).toBe(true);
    });
  });

  describe('span classes', () => {
    test('should add class to span #', () => {
      component.setProps({ span: 1 });
      expect(
        component.find('.ray-grid__cell').hasClass('ray-grid__cell--span-1'),
      ).toBe(true);
      component.setProps({ span: 6 });
      expect(
        component.find('.ray-grid__cell').hasClass('ray-grid__cell--span-6'),
      ).toBe(true);
      component.setProps({ span: 12 });
      expect(
        component.find('.ray-grid__cell').hasClass('ray-grid__cell--span-12'),
      ).toBe(true);
    });
    test('should add class to span # w/ desktop device', () => {
      component.setProps({ span: 1, device: 'desktop' });
      expect(
        component
          .find('.ray-grid__cell')
          .hasClass('ray-grid__cell--span-1-desktop'),
      ).toBe(true);
    });
    test('should add class to span # w/ desktop tablet', () => {
      component.setProps({ span: 6, device: 'tablet' });
      expect(
        component
          .find('.ray-grid__cell')
          .hasClass('ray-grid__cell--span-6-tablet'),
      ).toBe(true);
    });
    test('should add class to span # w/ desktop phone', () => {
      component.setProps({ span: 12, device: 'phone' });
      expect(
        component
          .find('.ray-grid__cell')
          .hasClass('ray-grid__cell--span-12-phone'),
      ).toBe(true);
    });
  });

  describe('align classes', () => {
    test('should add class to align top', () => {
      component.setProps({ align: 'top' });
      expect(
        component.find('.ray-grid__cell').hasClass('ray-grid__cell--align-top'),
      ).toBe(true);
    });
    test('should add class to align middle', () => {
      component.setProps({ align: 'middle' });
      expect(
        component
          .find('.ray-grid__cell')
          .hasClass('ray-grid__cell--align-middle'),
      ).toBe(true);
    });
    test('should add class to align bottom', () => {
      component.setProps({ align: 'bottom' });
      expect(
        component
          .find('.ray-grid__cell')
          .hasClass('ray-grid__cell--align-bottom'),
      ).toBe(true);
    });
  });

  describe('push classes', () => {
    test('should add class to push #', () => {
      component.setProps({ pushColumn: 1 });
      expect(
        component.find('.ray-grid__cell').hasClass('ray-grid__cell--push-1'),
      ).toBe(true);
      component.setProps({ pushColumn: 6 });
      expect(
        component.find('.ray-grid__cell').hasClass('ray-grid__cell--push-6'),
      ).toBe(true);
      component.setProps({ pushColumn: 12 });
      expect(
        component.find('.ray-grid__cell').hasClass('ray-grid__cell--push-12'),
      ).toBe(true);
    });
    test('should add class to push # w/ desktop device', () => {
      component.setProps({ pushColumn: 1, device: 'desktop' });
      expect(
        component
          .find('.ray-grid__cell')
          .hasClass('ray-grid__cell--push-1-desktop'),
      ).toBe(true);
    });
    test('should add class to push # w/ desktop tablet', () => {
      component.setProps({ pushColumn: 6, device: 'tablet' });
      expect(
        component
          .find('.ray-grid__cell')
          .hasClass('ray-grid__cell--push-6-tablet'),
      ).toBe(true);
    });
    test('should add class to push # w/ desktop phone', () => {
      component.setProps({ pushColumn: 12, device: 'phone' });
      expect(
        component
          .find('.ray-grid__cell')
          .hasClass('ray-grid__cell--push-12-phone'),
      ).toBe(true);
    });
  });
});