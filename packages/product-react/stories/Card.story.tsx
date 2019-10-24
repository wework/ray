import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Card, ILink } from '../src/components/Card/Card';

storiesOf('Core Comps | Card', module)
  .add('Default empty card', () => {
    return (
      <div className="wrapper">
        <Card />
      </div>
    );
  })
  .add('Header', () => {
    return (
      <div className="wrapper">
        <Card header="Header" />
      </div>
    );
  })
  .add('Image', () => {
    return (
      <div className="wrapper">
        <Card
          image={
            <img
              src="https://source.unsplash.com/random/800x450?minimalist"
              alt="card graphic"
            />
          }
        />
      </div>
    );
  })
  .add('Bad image url', () => {
    return (
      <div className="wrapper">
        <Card image="tinyurl" />
      </div>
    );
  })
  .add('Content', () => {
    return (
      <div className="wrapper">
        <Card content="Content" />
      </div>
    );
  })
  .add('Image and header', () => {
    return (
      <div className="wrapper">
        <Card
          image={
            <img
              src="https://source.unsplash.com/random/800x450?minimalist"
              alt="card graphic"
            />
          }
          header="Header"
        />
      </div>
    );
  })
  .add('Image and content', () => {
    return (
      <div className="wrapper">
        <Card
          image={
            <img
              src="https://source.unsplash.com/random/800x450?minimalist"
              alt="card graphic"
            />
          }
          content="Content"
        />
      </div>
    );
  })
  .add('Header and content', () => {
    return (
      <div className="wrapper">
        <Card header="Header" content="Content" />
      </div>
    );
  })
  .add('Header, image, and content', () => {
    return (
      <div className="wrapper">
        <Card
          image={
            <img
              src="https://source.unsplash.com/random/800x450?minimalist"
              alt="card graphic"
            />
          }
          header="Header"
          content="Content"
        />
      </div>
    );
  })
  .add('Header, image, and content as row', () => {
    return (
      <div className="wrapper">
        <Card
          row={true}
          image={
            <img
              src="https://source.unsplash.com/random/800x450?minimalist"
              alt="card graphic"
            />
          }
          header="Header"
          content="Content"
        />
      </div>
    );
  })
  .add('Card w/ children', () => {
    return (
      <div className="wrapper">
        <Card
          image={
            <img
              src="https://source.unsplash.com/random/800x450?minimalist"
              alt="card graphic"
            />
          }
          header="Header"
          content="Content"
        >
          <button>Child</button>
        </Card>
      </div>
    );
  })
  .add('Inactive', () => {
    return (
      <div className="wrapper">
        <Card
          image={
            <img
              src="https://source.unsplash.com/random/800x450?minimalist"
              alt="card graphic"
            />
          }
          header="Header"
          content="Content"
          inactive={true}
        >
          <button>Child</button>
        </Card>
      </div>
    );
  })
  .add('Compact', () => {
    return (
      <div className="wrapper">
        <Card
          image={
            <img
              src="https://source.unsplash.com/random/800x450?minimalist"
              alt="card graphic"
            />
          }
          header="Header"
          content="Content"
          compact={true}
        >
          <button>Child</button>
        </Card>
      </div>
    );
  })
  .add('RTL Header, image, and content', () => {
    return (
      <div className="wrapper">
        <Card
          rtl={true}
          image={
            <img
              src="https://source.unsplash.com/random/800x450?minimalist"
              alt="card graphic"
            />
          }
          header="Header"
          content="Content"
        />
      </div>
    );
  })
  .add('RTL Header, image, and content as row', () => {
    return (
      <div className="wrapper">
        <Card
          rtl={true}
          row={true}
          image={
            <img
              src="https://source.unsplash.com/random/800x450?minimalist"
              alt="card graphic"
            />
          }
          header="Header"
          content="Content sdfkjsdnajkfhsdjkfhkjsdhafjksdhafkjhdsakjfhsadkjhfjkadshfkjsadhfkjsadhfkjsadhkjfhsadkjfhasdjkfhkjasdhfjkdsahfkjasdhfjhdskjfhadsjkfhasdjkfhadsjk"
        />
      </div>
    );
  })
  .add('Link Card with Header, image, and content', () => {
    let linkProps: ILink;
    linkProps = {
      href: 'https://wework.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'ray-card ray-card--link',
      style: {maxWidth:'400px'}
    };

    return (
      <div className="wrapper">
        <Card
          image={
            <img
              src="https://source.unsplash.com/random/800x450?minimalist"
              alt="card graphic"
            />
          }
          header="Header"
          content="Content"
          linkProps={linkProps}
        />
      </div>
    );
  });
