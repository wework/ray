import React from 'react';
import { mount } from 'enzyme';
import Select from '.';

describe('Select', () => {
  const fauxCallback = jest.fn();
  let component;

  beforeEach(() => {
    component = mount(
      <Select>
        <option value={1}>WeWork</option>
        <option value={2}>WeLive</option>
        <option value={3}>WeGrow</option>
        <option value={4}>WeTech</option>
      </Select>
    );
  });

  test('it renders a select', () => {
    const wrapper = mount(<Select>hello world</Select>);
    expect(wrapper.find('.ray-select').length).toBe(1);
  });

  test('it supports a custom class', () => {
    const wrapper = mount(
      <Select className="some-custom-class" id="selecttest" label="henlo" />
    );
    expect(wrapper.find('.ray-select.some-custom-class').length).toBe(1);
  });

  describe('Default Properties', () => {
    it('has default "ACTIVE" property that can be set (:boolean)', () => {
      component.setProps({ active: true });
      expect(component.props().active).toEqual(true);
    });

    it('has default "COMPACT" property that can be set (:boolean)', () => {
      component.setProps({ compact: true });
      expect(component.props().compact).toEqual(true);
    });

    it('has default "ERROR" property that can be set (:boolean)', () => {
      component.setProps({ error: true });
      expect(component.props().error).toEqual(true);
    });

    it('has default "ICONSTART" property that can be set (:string)', () => {
      component.setProps({ iconPosition: 'iconstart' });
      expect(component.find('.ray-select--with-icon-start')).toHaveLength(1);
    });

    it('has default "ICONEND" property that can be set (:string)', () => {
      expect(component.find('.ray-select--with-icon-start')).toHaveLength(0);
      component.setProps({ iconPosition: 'iconend' });
      expect(component.find('.ray-select--with-icon-start')).toHaveLength(1);
    });

    it('has default "prepend" property that can be set (:true)', () => {
      component.setProps({ prepend: true });
      expect(component.props().prepend).toEqual(true);
    });
  });

  describe('Classes & Composed Classes', () => {
    it('contains DEFAULT', () => {
      expect(component.find('.ray-select')).toHaveLength(1);
      expect(component.find('.ray-select__wrapper')).toHaveLength(1);
      expect(component.find('select').hasClass('ray-select__input')).toEqual(
        true
      );
      expect(component.find('label').hasClass('ray-select__label')).toEqual(
        true
      );
    });

    it('contains specific class if select is in focus/blur (aka "active"/"inactive")', () => {
      expect(component.find('.ray-select--active')).toHaveLength(0);
      component.find('select').simulate('focus');
      expect(component.find('.ray-select--active')).toHaveLength(1);
    });
  });

  describe('Functions', () => {
    it('onFocus', () => {
      component = mount(
        <Select onFocus={fauxCallback}>
          <option value={1}>WeWork</option>
          <option value={2}>WeLive</option>
          <option value={3}>WeGrow</option>
          <option value={4}>WeTech</option>
        </Select>
      );
      component.find('select').prop('onFocus');
    });
  });
});
