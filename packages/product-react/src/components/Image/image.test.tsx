import React from 'react';
import { mount } from 'enzyme';

import {Image} from './Image';

describe('Image', () => {
  test('it renders an image', () => {
    const wrapper = mount(<Image src="/test_image.jpg" />);

    expect(wrapper.find('.ray-image').length).toBe(1);
  });

  describe('bg', () => {
    test('it renders a background image', () => {
      const wrapper = mount(<Image src="/test_image.jpg" bg />);

      const element = wrapper.find('.ray-bg').instance();
      expect(element.style.backgroundImage).toBe('url(/test_image.jpg)');
    });
  });
});
