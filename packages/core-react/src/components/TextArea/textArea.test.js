import React from 'react';
import { mount } from 'enzyme';

import TextArea from '.';

describe('TextArea', () => {
  test('it renders a text field', () => {
    const wrapper = mount(<TextArea id="email" />);
    expect(wrapper.find('textarea').length).toBe(1);
  });

  test('it renders a text area with a label', () => {
    const wrapper = mount(<TextArea id="email" label="email address" />);
    expect(wrapper.find('label.ray-text-area__label').length).toBe(1);
  });
});
