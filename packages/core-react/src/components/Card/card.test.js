import React from 'react';
import { mount } from 'enzyme';

import Card from '.';

describe('Card', () => {
  test('it renders a card', () => {
    const wrapper = mount(<Card />);
    expect(wrapper.find('.ray-card').length).toBe(1);
  });
});
