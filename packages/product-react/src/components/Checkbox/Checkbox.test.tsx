import Enzyme from 'enzyme';
import React from 'react';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('it renders a checkbox', () => {
    const wrapper = Enzyme.mount(<Checkbox id="3" label="hello world" />);
    expect(wrapper.find('.ray-checkbox').length).toBe(1);
    expect(wrapper.find('input[type="checkbox"]').length).toBe(1);
  });

  test('it supports a custom class', () => {
    const wrapper = Enzyme.mount(
      <Checkbox className="some-custom-class" id="4" label="henlo" />
    );
    expect(wrapper.find('.ray-checkbox.some-custom-class').length).toBe(1);
  });
});
