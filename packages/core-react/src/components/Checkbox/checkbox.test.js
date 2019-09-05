import React from 'react';
import { mount } from 'enzyme';

import Checkbox from '.';

describe('Checkbox', () => {
  test('it renders a checkbox', () => {
    const wrapper = mount(<Checkbox>hello world</Checkbox>);
    expect(wrapper.find('.ray-checkbox').length).toBe(1);
  });

  test('it supports a custom class', () => {
    const wrapper = mount(
      <Checkbox className="some-custom-class" id="checkboxtest" label="henlo" />
    );
    expect(wrapper.find('.ray-checkbox.some-custom-class').length).toBe(1);
  });
});
