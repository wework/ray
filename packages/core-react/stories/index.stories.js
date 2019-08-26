import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/components/Button';
import Card from '../src/components/Card';

storiesOf('Button', module)
  .add('default', () => (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <Button>Hiya</Button>
        <Button disabled>Hiya</Button>
        <Button type="secondary">Hiya</Button>
        <Button type="secondary" disabled>
          Hiya
        </Button>
        <Button type="tertiary">Hiya</Button>
        <Button type="tertiary" disabled>
          Hiya
        </Button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Button compact>Hiya</Button>
        <Button compact disabled>
          Hiya
        </Button>
        <Button compact type="secondary">
          Hiya
        </Button>
        <Button compact type="secondary" disabled>
          Hiya
        </Button>
        <Button compact type="tertiary">
          Hiya
        </Button>
        <Button compact type="tertiary" disabled>
          Hiya
        </Button>
      </div>
    </>
  ))
  .add('danger', () => (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <Button danger>Hiya</Button>
        <Button danger disabled>
          Hiya
        </Button>
        <Button danger type="secondary">
          Hiya
        </Button>
        <Button danger type="secondary" disabled>
          Hiya
        </Button>
        <Button danger type="tertiary">
          Hiya
        </Button>
        <Button danger type="tertiary" disabled>
          Hiya
        </Button>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <Button danger compact>
          Hiya
        </Button>
        <Button danger compact disabled>
          Hiya
        </Button>
        <Button danger compact type="secondary">
          Hiya
        </Button>
        <Button danger compact type="secondary" disabled>
          Hiya
        </Button>
        <Button danger compact type="tertiary">
          Hiya
        </Button>
        <Button danger compact type="tertiary" disabled>
          Hiya
        </Button>
      </div>
    </>
  ));

storiesOf('Card', module)
  .add('16by9 (default)', () => (
    <>
      <div style={{ maxWidth: '500px', marginBottom: '1rem' }}>
        <Card
          heading={'Hello World'}
          body={'Hello World'}
          img={
            <img
              src="https://source.unsplash.com/random/800x800?minimalist"
              alt="card graphic"
            />
          }
        />
      </div>

      <div style={{ maxWidth: '500px', marginBottom: '1rem' }}>
        <Card
          heading={'Hello World'}
          body={'Hello World'}
          img={
            <img
              src="https://source.unsplash.com/random/800x800?minimalist"
              alt="card graphic"
            />
          }
          row
        />
      </div>
    </>
  ))
  .add('4by3', () => (
    <>
      <div style={{ maxWidth: '500px', marginBottom: '1rem' }}>
        <Card
          heading={'Hello World'}
          body={'Hello World'}
          img={
            <img
              src="https://source.unsplash.com/random/800x1000?minimalist"
              alt="card graphic"
            />
          }
          aspectRatio="4by3"
        />
      </div>

      <div style={{ maxWidth: '500px', marginBottom: '1rem' }}>
        <Card
          heading={'Hello World'}
          body={'Hello World'}
          img={
            <img
              src="https://source.unsplash.com/random/800x1000?minimalist"
              alt="card graphic"
            />
          }
          aspectRatio="4by3"
          row
        />
      </div>
    </>
  ))
  .add('3by4', () => (
    <>
      <div style={{ maxWidth: '500px', marginBottom: '1rem' }}>
        <Card
          heading={'Hello World'}
          body={'Hello World'}
          img={
            <img
              src="https://source.unsplash.com/random/450x800?minimalist"
              alt="card graphic"
            />
          }
          aspectRatio="3by4"
        />
      </div>

      <div style={{ maxWidth: '500px', marginBottom: '1rem' }}>
        <Card
          heading={'Hello World'}
          body={'Hello World'}
          img={
            <img
              src="https://source.unsplash.com/random/450x800?minimalist"
              alt="card graphic"
            />
          }
          aspectRatio="3by4"
          row
        />
      </div>
    </>
  ))
  .add('1by1', () => (
    <>
      <div style={{ maxWidth: '500px', marginBottom: '1rem' }}>
        <Card
          heading={'Hello World'}
          body={'Hello World'}
          img={
            <img
              src="https://source.unsplash.com/random/800x800?minimalist"
              alt="card graphic"
            />
          }
          aspectRatio="1by1"
        />
      </div>

      <div style={{ maxWidth: '500px', marginBottom: '1rem' }}>
        <Card
          heading={'Hello World'}
          body={'Hello World'}
          img={
            <img
              src="https://source.unsplash.com/random/800x800?minimalist"
              alt="card graphic"
            />
          }
          aspectRatio="1by1"
          row
        />
      </div>
    </>
  ))
  .add('cinema', () => (
    <>
      <div style={{ maxWidth: '500px', marginBottom: '1rem' }}>
        <Card
          heading={'Hello World'}
          body={'Hello World'}
          img={
            <img
              src="https://source.unsplash.com/random/800x800?minimalist"
              alt="card graphic"
            />
          }
          aspectRatio="cinema"
        />
      </div>

      <div style={{ maxWidth: '500px', marginBottom: '1rem' }}>
        <Card
          heading={'Hello World'}
          body={'Hello World'}
          img={
            <img
              src="https://source.unsplash.com/random/800x800?minimalist"
              alt="card graphic"
            />
          }
          aspectRatio="cinema"
          row
        />
      </div>
    </>
  ));
