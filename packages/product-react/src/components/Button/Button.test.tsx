import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';

describe('Button', () => {
  test('it renders a primary button', () => {
    const wrapper = mount(<Button>hello world</Button>);
    expect(wrapper.find('.ray-button--primary').length).toBe(1);
  });

  test('it supports a custom class', () => {
    const wrapper = mount(
      <Button className="some-custom-class">hello world</Button>
    );
    expect(wrapper.find('.ray-button.some-custom-class').length).toBe(1);
  });
});
