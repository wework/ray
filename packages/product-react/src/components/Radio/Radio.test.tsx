import React from 'react';
import Enzyme from 'enzyme';

import Radio from './Radio';

describe('Radio', () => {
  test('it renders a radio', () => {
    const wrapper = Enzyme.mount(<Radio id="radiotest" />);
    expect(wrapper.find('.ray-radio').length).toBe(1);
  });

  test('it supports a custom class', () => {
    const wrapper = Enzyme.mount(
      <Radio className="some-custom-class" id="radiotest" label="henlo" />
    );
    expect(wrapper.find('.ray-radio.some-custom-class').length).toBe(1);
  });

  test('it a pill style', () => {
    const wrapper = Enzyme.mount(
      <Radio className="some-custom-class" id="radiotest" label="henlo" pill />
    );
    expect(wrapper.props().pill).toEqual(true);
  });
});