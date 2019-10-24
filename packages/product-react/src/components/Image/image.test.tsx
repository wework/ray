import Enzyme from 'enzyme';
import React from 'react';

import Image from './Image';

describe('Image', () => {
  test('it renders an image', () => {
    const wrapper = Enzyme.mount(
      <Image aspect="16by9" src="/test_image.jpg" />
    );
    expect(wrapper.find('.ray-image').length).toBe(1);
  });

  describe('bg', () => {
    test('it renders a background image', () => {
      const wrapper = Enzyme.mount(
        <Image aspect="16by9" src="/test_image.jpg" bg />
      );
      expect(wrapper.props()).toHaveProperty('src', '/test_image.jpg');
    });
  });
});
