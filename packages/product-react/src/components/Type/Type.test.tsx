import React from 'react';
import Enzyme from 'enzyme';

import {Type} from './Type';

const SAMPLE_TEXT = 'All their equipment and instruments are alive.';

describe('Type', () => {
  test('should renders type wshouldh ray body class', () => {
    const wrapper = Enzyme.mount(<Type>{SAMPLE_TEXT}</Type>);
    expect(wrapper.find(Type).length).toBe(1);
  });

  test('should renders type wshouldh added attributes', () => {
    const wrapper = Enzyme.mount(
      <Type className="custom-class" data-stuff="hello">
        {SAMPLE_TEXT}
      </Type>
    );

    expect(wrapper.html()).toBe(
      '<div class="custom-class ray-text--body" data-stuff="hello">All their equipment and instruments are alive.</div>'
    );
  });

  test('should renders type wshouldh a style', () => {
    const wrapper = Enzyme.mount(<Type style="h3">{SAMPLE_TEXT}</Type>);

    expect(wrapper.html()).toBe(
      '<div class="ray-text--h3">All their equipment and instruments are alive.</div>'
    );
  });

  test('should renders type with a custom tag', () => {
    const wrapper = Enzyme.mount(
      <Type Tag="h1" style="display-1">
        {SAMPLE_TEXT}
      </Type>
    );

    expect(wrapper.html()).toBe(
      '<h1 class="ray-text--display-1">All their equipment and instruments are alive.</h1>'
    );
  });

});
