import React from 'react';
import { mount } from 'enzyme';

import Button from '.';

describe('Button', () => {
  test('it renders a primary button', () => {
    const wrapper = mount(<Button>hello world</Button>);
    expect(wrapper.find('.ray-button--primary')).toHaveLength(1);
  });

  test('it supports a custom class', () => {
    const wrapper = mount(
      <Button className="some-custom-class">hello world</Button>
    );
    expect(wrapper.find('.ray-button.some-custom-class')).toHaveLength(1);
  });

  test('it supports type & variant attributes', () => {
    const wrapper = mount(
      <Button variant="secondary" type="submit">
        Submit Button
      </Button>
    );
    const buttonWrapper = wrapper.find(Button);
    expect(buttonWrapper.props().type).toEqual('submit');
    expect(buttonWrapper.props().variant).toEqual('secondary');
  });
});
