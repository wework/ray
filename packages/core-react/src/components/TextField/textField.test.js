import React from 'react';
import { mount } from 'enzyme';

import TextField from '.';

describe('TextField', () => {
  test('it renders a text field', () => {
    const wrapper = mount(<TextField id="email" />);
    expect(wrapper.find('input[type="text"]').length).toBe(1);
  });

  test('it renders a text field with a label', () => {
    const wrapper = mount(<TextField id="email" label="email address" />);
    expect(wrapper.find('label').length).toBe(1);
  });
});
