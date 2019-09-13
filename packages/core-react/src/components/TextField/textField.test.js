import React from 'react';
import { mount } from 'enzyme';

import TextField from '.';

describe('TextField', () => {
  // const fauxCallback = jest.fn();
  let component = '';

  beforeEach(() => {
    component = mount(<TextField id="email" />);
  });

  test('it renders a text field', () => {
    const wrapper = mount(<TextField id="email" />);
    expect(wrapper.find('input[type="text"]').length).toBe(1);
  });

  test('it renders a text field with a label', () => {
    const wrapper = mount(<TextField id="email" label="email address" />);
    expect(wrapper.find('label').length).toBe(1);
  });

  describe('Default Properties', () => {
    it('has default "HINT" property that can be set (:string)', () => {
      expect(component.props().hint).toEqual('');
      component.setProps({ hint: 'This is a regular hint.' });
      expect(component.props().hint).toEqual('This is a regular hint.');
    });

    it('has default "HINTSUCCESS" property that can be set (:string)', () => {
      expect(component.props().hintSuccess).toEqual('');
      component.setProps({ hintSuccess: 'This is a green hint.' });
      expect(component.props().hintSuccess).toEqual('This is a green hint.');
    });

    it('has default "HINTERROR" property that can be set (:string)', () => {
      expect(component.props().hintError).toEqual('');
      component.setProps({ hintError: 'This is a red hint.' });
      expect(component.props().hintError).toEqual('This is a red hint.');
    });

    it('has default "ICONSTART" property that can be set (:boolean)', () => {
      expect(component.find('.ray-text-field--with-icon-start')).toHaveLength(
        0
      );
      component.setProps({ iconStart: true });
      expect(component.find('.ray-text-field--with-icon-start')).toHaveLength(
        1
      );
    });

    it('has default "ICONEND" property that can be set (:boolean)', () => {
      expect(component.find('.ray-text-field--with-icon-end')).toHaveLength(0);
      component.setProps({ iconEnd: true });
      expect(component.find('.ray-text-field--with-icon-end')).toHaveLength(1);
    });

    it('has default "ICONPREPEND" property that can be set (:boolean)', () => {
      expect(component.props().prepend).toEqual(false);
      component.setProps({ prepend: true });
      expect(component.props().prepend).toEqual(true);
    });
  });
});
