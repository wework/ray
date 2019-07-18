import React from 'react';
import { mount } from 'enzyme';

import TextField from '.';

describe('TextField', () => {
  test('it renders a text field', () => {
    const wrapper = mount(<TextField />);
    expect(wrapper.find('.ray-text-field').length).toBe(1);
  });
});
