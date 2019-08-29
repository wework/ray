import React from 'react';
import { mount } from 'enzyme';

import { Container, Grid, Cell } from '.';

describe('Grid', () => {
  test('it renders a grid', () => {
    const wrapper = mount(
      <Container>
        <Grid>
          <Cell>hello world</Cell>
        </Grid>
      </Container>
    );
    expect(wrapper.html()).toBe(
      '<div class="ray-page-container"><div class="ray-grid"><div class="ray-grid__cell">hello world</div></div></div>'
    );
  });

  test('it renders special cells', () => {
    const wrapper = mount(
      <Cell push={1} span={5}>
        hello world
      </Cell>
    );
    expect(wrapper.html()).toBe(
      '<div class="ray-grid__cell ray-grid__cell--span-5 ray-grid__cell--push-1">hello world</div>'
    );
  });

  test('it renders a cell with breakpoint settings', () => {
    const wrapper = mount(
      <Cell push={1} span={5} push-desktop={2} span-phone={3} span-desktop={6}>
        hello world
      </Cell>
    );
    expect(wrapper.html()).toBe(
      '<div class="ray-grid__cell ray-grid__cell--span-5 ray-grid__cell--push-1 ray-grid__cell--span-3-phone ray-grid__cell--span-6-desktop ray-grid__cell--push-2-desktop" push-desktop="2" span-phone="3" span-desktop="6">hello world</div>'
    );
  });

  test('it renders container, grid and cell with custom tags', () => {
    const wrapper = mount(
      <Container Tag="main">
        <Grid Tag="section">
          <Cell Tag="nav">hello world</Cell>
        </Grid>
      </Container>
    );
    expect(wrapper.html()).toBe(
      '<main class="ray-page-container"><section class="ray-grid"><nav class="ray-grid__cell">hello world</nav></section></main>'
    );
  });
});
