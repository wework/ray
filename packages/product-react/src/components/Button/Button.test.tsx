import Enzyme from 'enzyme';
import React from 'react';
import { Button } from './Button';

describe('Button', () => {
  let component: Enzyme.ReactWrapper<any>;
  const fauxCallback = jest.fn();

  beforeEach(() => {
    component = Enzyme.mount(
      <Button name="sfdgfdfgdgd" onClick={fauxCallback} />
    );
  });

  test('should match snapshot and styles for default props', () => {
    expect(component.debug()).toMatchSnapshot();
  });

  describe('Default Properties', () => {
    it('has default "TYPE" property that can be set', () => {
      expect(component.props().buttonStyle).toEqual('primary');
      component.setProps({ buttonStyle: 'secondary' });
      expect(component.props().buttonStyle).toEqual('secondary');
      component.setProps({ buttonStyle: 'tertiary' });
      expect(component.props().buttonStyle).toEqual('tertiary');
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
        true
      );
      component.setProps({ buttonStyle: 'secondary' });
      expect(
        component.find('button').hasClass('ray-button--secondary')
      ).toEqual(true);
      component.setProps({ buttonStyle: 'tertiary' });
      expect(component.find('button').hasClass('ray-button--tertiary')).toEqual(
        true
      );
    });
  });

  describe('Composed Classes', () => {
    it('contains composed classes when it is COMPACT', () => {
      component.setProps({ compact: true });
      expect(
        component
          .find('button')
          .hasClass('ray-button--primary ray-button--compact')
      ).toEqual(true);
      component.setProps({ buttonStyle: 'secondary', compact: true });
      expect(
        component
          .find('button')
          .hasClass('ray-button--secondary ray-button--compact')
      ).toEqual(true);
      component.setProps({ buttonStyle: 'tertiary', compact: true });
      expect(
        component
          .find('button')
          .hasClass('ray-button--tertiary ray-button--compact')
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
