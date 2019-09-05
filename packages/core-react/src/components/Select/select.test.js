import React from 'react';
import { mount } from 'enzyme';

import Select from '.';

describe('Select', () => {
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
});
