import Enzyme from 'enzyme';
import React from 'react';
import { IconPosition, Input } from './Input';

describe('Input', () => {
  const fauxCallback = jest.fn();
  let component: Enzyme.ReactWrapper<any>;

  const defaultProps = {
    label: 'Wework',
    id: 'unique123',
    type: 'text',
    placeholder: 'Arya Stark',
    iconPosition: IconPosition.START,
    onChange(evt: React.ReactNode) {
      return;
    }
  };

  beforeEach(() => {
    component = Enzyme.mount(<Input {...defaultProps} />);
  });

  test('it renders a input', () => {
    const wrapper = component;
    expect(wrapper.find('input').length).toBe(1);
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

    it('has "ICONSTART" property that can be set (:ENUM)', () => {
      component.setProps({
        iconPosition: IconPosition.START,
        icon: (
          <svg className="ray-text-field__icon--start" viewBox="0 0 25 25">
            <g id="budicon-profile-picture">
              <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
            </g>
          </svg>
        )
      });
      expect(component.find('.ray-text-field--with-icon-start')).toHaveLength(
        1
      );
    });

    it('has "ICONEND" property that can be set (:ENUM)', () => {
      component.setProps({
        iconPosition: IconPosition.END,
        icon: (
          <svg className="ray-text-field__icon--end" viewBox="0 0 25 25">
            <g id="budicon-profile-picture">
              <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
            </g>
          </svg>
        )
      });
      expect(component.find('.ray-text-field--with-icon-end')).toHaveLength(1);
    });

    it('has "ICONPREPEND" property that can be set (:ENUM)', () => {
      component.setProps({
        iconPosition: IconPosition.PREPEND,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            style={{ height: '1rem' }}
          >
            <g id="budicon-profile-picture">
              <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
            </g>
          </svg>
        )
      });
      expect(component.find('.ray-text-field--with-PREPEND')).toHaveLength(1);
    });

    it('has value property that can be set (:number || string)', () => {
      const component = Enzyme.mount(<Input value={4} {...defaultProps} />);
      expect(component.props().value).toEqual(4);
    });
  });

  describe('Functions events', () => {
    it('should call onFocus prop on input focus', () => {
      component.setProps({ onFocus: fauxCallback });
      component.find('input').simulate('focus');
      expect(component.find('.ray-text-field--active').exists()).toBe(true);
    });

    it('should call onBlur prop on input blur', () => {
      component.setProps({ onBlur: fauxCallback });
      component.find('input').simulate('blur');
      expect(component.find('.ray-text-field--active').exists()).toBe(false);
    });
  });
});
