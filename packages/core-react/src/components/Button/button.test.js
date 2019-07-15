import React from 'react';
import { mount } from 'enzyme';

import Button from '.';

describe('Button', () => {
  test('it renders a primary button', () => {
    const wrapper = mount(<Button>hello world</Button>);
    expect(wrapper.find('.ray-button--primary').length).toBe(1);
  });
});
