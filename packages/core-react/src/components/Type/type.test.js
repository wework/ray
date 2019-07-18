import React from 'react';
import { mount } from 'enzyme';

import Type from '.';

const SAMPLE_TEXT = 'All their equipment and instruments are alive.';

describe('Type', () => {
  test('it renders type with ray body class', () => {
    const wrapper = mount(<Type>{SAMPLE_TEXT}</Type>);

    expect(wrapper.find(Type).length).toBe(1);
  });

  test('it renders type with added attributes', () => {
    const wrapper = mount(
      <Type className="custom-class" data-stuff="hello">
        {SAMPLE_TEXT}
      </Type>
    );

    expect(wrapper.html()).toBe(
      '<div class="custom-class ray-text--body" data-stuff="hello">All their equipment and instruments are alive.</div>'
    );
  });

  test('it renders type with a style', () => {
    const wrapper = mount(<Type style="h3">{SAMPLE_TEXT}</Type>);

    expect(wrapper.html()).toBe(
      '<div class="ray-text--h3">All their equipment and instruments are alive.</div>'
    );
  });

  test('it renders type with a custom tag', () => {
    const wrapper = mount(
      <Type Tag="h1" style="display-1">
        {SAMPLE_TEXT}
      </Type>
    );

    expect(wrapper.html()).toBe(
      '<h1 class="ray-text--display-1">All their equipment and instruments are alive.</h1>'
    );
  });

  test('it throws a proptype error if style is invalid', () => {
    expect(() => {
      mount(<Type style="bad-style">{SAMPLE_TEXT}</Type>);
    }).toThrow();
  });
});
