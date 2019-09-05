import React from 'react';
import { mount } from 'enzyme';

import Radio from '.';

describe('Radio', () => {
  test('it renders a radio', () => {
    const wrapper = mount(<Radio>hello world</Radio>);
    expect(wrapper.find('.ray-radio').length).toBe(1);
  });

  test('it supports a custom class', () => {
    const wrapper = mount(
      <Radio className="some-custom-class" id="radiotest" label="henlo" />
    );
    expect(wrapper.find('.ray-radio.some-custom-class').length).toBe(1);
  });
});
