import React from 'react';
import Enzyme from 'enzyme';
import { IconPosition, Select } from './Select';

describe('Select', () => {
  const fauxCallback = jest.fn();
  let component: Enzyme.ReactWrapper<any>;

  beforeEach(() => {
    component = Enzyme.mount(
      <Select
        options={[
          { value: 1, label: 'Wework ' },
          { value: 2, label: 'WeLive ' },
          { value: 3, label: 'WeGrow ' },
          { value: 4, label: 'WeTech ' }
        ]}
      />
    );
  });

  test('it renders a select', () => {
    const wrapper = component;
    expect(wrapper.find('.ray-select').length).toBe(1);
  });

  test('it supports a custom class', () => {
    component.setProps({
      active: true,
      className: 'some-custom-class',
      id: 'selecttest',
      label: 'henlo'
    });

    expect(component.find('.ray-select.some-custom-class').length).toBe(1);
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
      component.setProps({
        iconPosition: IconPosition.Start,
        icon: (
          <svg className="ray-select__icon--start" viewBox="0 0 25 25">
            <g id="budicon-profile-picture">
              <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
            </g>
          </svg>
        )
      });
      expect(component.find('.ray-select--with-icon-start')).toHaveLength(1);
    });

    it('has default "ICONEND" property that can be set (:string)', () => {
      component.setProps({
        iconPosition: IconPosition.End,
        rtl: true,
        icon: (
          <svg className="ray-select__icon--start" viewBox="0 0 25 25">
            <g id="budicon-profile-picture">
              <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
            </g>
          </svg>
        )
      });
      expect(component.find('.ray-select--with-icon-start')).toHaveLength(1);
    });

    it('has value property that can be set (:number || string)', () => {
      const component = Enzyme.mount(
        <Select
          value={4}
          options={[
            { value: 1, label: 'Wework ' },
            { value: 2, label: 'WeLive ' },
            { value: 3, label: 'WeGrow ' },
            { value: 4, label: 'WeTech ' }
          ]}
        />
      );
      expect(component.props().value).toEqual(4);
    });
  });

  describe('Classes & Composed Classes', () => {
    it('contains DEFAULT', () => {
      expect(component.find('.ray-select')).toHaveLength(1);
      expect(component.find('select').hasClass('ray-select__input')).toEqual(
        true
      );
      expect(component.find('label').hasClass('ray-select__label')).toEqual(
        true
      );
    });

    it('contains specific class if select is in focus/blur (aka "active"/"inactive")', () => {
      component.setProps({ active: true });
      expect(component.find('.ray-select--active')).toHaveLength(0);
      component.find('select').simulate('focus');
      expect(component.find('.ray-select--active')).toHaveLength(1);
    });
  });

  describe('Functions events', () => {
    it('onFocus', () => {
      component.setProps({ onFocus: fauxCallback });
      component.find('select').simulate('focus');
    });

    it('onBlur', () => {
      component.setProps({ onBlur: fauxCallback });
      component.find('select').simulate('blur');
    });

    it('onChange', () => {
      component.setProps({ onChange: fauxCallback });
      component.find('select').simulate('change');
    });
  });

  it('has value options length that can be set (Array:)', () => {
    const component = Enzyme.mount(
      <Select
        value={4}
        options={[
          { value: 1, label: 'Wework ' },
          { value: 2, label: 'WeLive ' },
          { value: 3, label: 'WeGrow ' },
          { value: 4, label: 'WeTech ' }
        ]}
      />
    );
    expect(component.props().options.length).toEqual(4);
   });
});
