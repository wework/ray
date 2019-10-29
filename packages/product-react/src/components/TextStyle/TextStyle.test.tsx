import React from 'react';
import Enzyme from 'enzyme';

import { TextStyle } from './TextStyle';

const SAMPLE_TEXT = 'All their equipment and instruments are alive.';

describe('TextStyle', () => {
  test('should renders TextStyle with ray body class', () => {
    const wrapper = Enzyme.mount(<TextStyle>{SAMPLE_TEXT}</TextStyle>);
    expect(wrapper.find(TextStyle).length).toBe(1);
  });

  test('should renders TextStyle with added attributes', () => {
    const wrapper = Enzyme.mount(
      <TextStyle className="custom-class" data-stuff="hello" style="body">
        {SAMPLE_TEXT}
      </TextStyle>
    );

    expect(wrapper.html()).toBe(
      '<div class="custom-class ray-text--body" data-stuff="hello">All their equipment and instruments are alive.</div>'
    );
  });

  test('should renders TextStyle with a style', () => {
    const wrapper = Enzyme.mount(
      <TextStyle style="h3">{SAMPLE_TEXT}</TextStyle>
    );

    expect(wrapper.html()).toBe(
      '<div class="ray-text--h3">All their equipment and instruments are alive.</div>'
    );
  });

  test('should renders TextStyle with a custom tag', () => {
    const wrapper = Enzyme.mount(
      <TextStyle as="h1" style="display-1">
        {SAMPLE_TEXT}
      </TextStyle>
    );
    expect(wrapper.html()).toBe(
      '<h1 class="ray-text--display-1">All their equipment and instruments are alive.</h1>'
    );
  });
});
