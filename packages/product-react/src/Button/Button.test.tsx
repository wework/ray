import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { Button } from './Button';

describe('Button', () => {
  let component: ReactWrapper<any>;
  const fauxCallback = jest.fn();

  beforeEach(() => {
    component = mount(<Button onClick={fauxCallback} />);
  });

  test('should match snapshot and styles for default props', () => {
    expect(component.debug()).toMatchSnapshot();
  });

  describe('Default Properties', () => {
    it('has default "TYPE" property that can be set', () => {
      expect(component.props().type).toEqual('primary');
      component.setProps({ type: 'secondary' });
      expect(component.props().type).toEqual('secondary');
      component.setProps({ type: 'tertiary' });
      expect(component.props().type).toEqual('tertiary');
    });

    it('has default "COMPACT" property that can be set', () => {
      expect(component.props().compact).toEqual(false);
      component.setProps({ compact: true });
      expect(component.props().compact).toEqual(true);
    });

    it('has default "DANGER" property that can be set', () => {
      expect(component.props().danger).toEqual(false);
      component.setProps({ danger: true });
      expect(component.props().danger).toEqual(true);
    });

    it('has default "DISABLED" property that can be set', () => {
      expect(component.props().disabled).toEqual(false);
      component.setProps({ disabled: true });
      expect(component.props().disabled).toEqual(true);
    });
  });

  describe('Classes', () => {
    it('contains DEFAULT', () => {
      expect(component.find('button').hasClass('ray-button')).toEqual(true);
    });

    it('contains correct class that corresponds with a specified TYPE prop', () => {
      expect(component.find('button').hasClass('ray-button--primary')).toEqual(
        true,
      );
      component.setProps({ type: 'secondary' });
      expect(
        component.find('button').hasClass('ray-button--secondary'),
      ).toEqual(true);
      component.setProps({ type: 'tertiary' });
      expect(component.find('button').hasClass('ray-button--tertiary')).toEqual(
        true,
      );
    });
  });

  describe('Composed Classes', () => {
    it('contains composed classes when it is COMPACT', () => {
      component.setProps({ compact: true });
      expect(
        component
          .find('button')
          .hasClass('ray-button--primary ray-button--compact'),
      ).toEqual(true);
      component.setProps({ type: 'secondary', compact: true });
      expect(
        component
          .find('button')
          .hasClass('ray-button--secondary ray-button--compact'),
      ).toEqual(true);
      component.setProps({ type: 'tertiary', compact: true });
      expect(
        component
          .find('button')
          .hasClass('ray-button--tertiary ray-button--compact'),
      ).toEqual(true);
    });
  });

  describe('Functions', () => {
    it('clicks', () => {
      component.find('button').simulate('click');
      expect(fauxCallback.mock.calls.length).toEqual(1);
    });
  });
});
