import React from 'react';
import Enzyme from 'enzyme';

import { Card, ILink } from './Card';

describe('Card', () => {
  let component: Enzyme.ReactWrapper<any>;

  beforeEach(() => {
    component = Enzyme.mount(<Card />);
  });

  test('it renders a card', () => {
    expect(component.find('.ray-card').length).toBe(1);
  });

  it('has "COMPACT" property that can be set (:boolean)', () => {
    component.setProps({ compact: true });
    expect(component.props().compact).toEqual(true);
  });

  it('"IMAGE" property that can be set (:REACT NODE)', () => {
    component.setProps({
      image: (
        <img
          src="https://source.unsplash.com/random/800x450?minimalist"
          alt="card graphic"
        />
      ),
      header: 'Header',
      content: 'Content'
    });
    expect(component.find('.ray-card__image').length).toBe(1);
  });

  it('"RTL" property that can be set (:boolean)', () => {
    component.setProps({
      image: (
        <img
          src="https://source.unsplash.com/random/800x450?minimalist"
          alt="card graphic"
        />
      ),
      header: 'Header',
      content: 'Content',
      rtl: true
    });
    expect(component.find('.ray-card__image').length).toBe(1);
  });
  it('"row with rtl" property that can be set (:boolean)', () => {
    component.setProps({
      image: (
        <img
          src="https://source.unsplash.com/random/800x450?minimalist"
          alt="card graphic"
        />
      ),
      header: 'Header',
      content: 'Content',
      rtl: true,
      row: true
    });
    expect(component.find('.ray-card__image').length).toBe(1);
  });
  it('"link " property that can be set (:Object)', () => {
    let linkProps: ILink;
    linkProps = {
      href: 'https://wework.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'ray-card ray-card--link',
      style: { maxWidth: '400px' }
    };

    component.setProps({
      image: (
        <img
          src="https://source.unsplash.com/random/800x450?minimalist"
          alt="card graphic"
        />
      ),
      header: 'Header',
      content: 'Content',
      linkProps
    });
    expect(component.find('a').length).toBe(1);
  });

  it('"Card with children"  (:Object)', () => {
    const component = Enzyme.mount(
      <Card>
        <button>Child</button>
      </Card>
    );

    component.setProps({
      image: (
        <img
          src="https://source.unsplash.com/random/800x450?minimalist"
          alt="card graphic"
        />
      ),
      header: 'Header',
      content: 'Content'
    });
    expect(component.find('button').length).toBe(1);
  });
});
