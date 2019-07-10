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
        <Button isCompact>Hiya</Button>
        <Button isCompact disabled>
          Hiya
        </Button>
        <Button isCompact type="secondary">
          Hiya
        </Button>
        <Button isCompact type="secondary" disabled>
          Hiya
        </Button>
        <Button isCompact type="tertiary">
          Hiya
        </Button>
        <Button isCompact type="tertiary" disabled>
          Hiya
        </Button>
      </div>
    </>
  ))
  .add('danger noodle', () => (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <Button isDanger>Hiya</Button>
        <Button isDanger disabled>
          Hiya
        </Button>
        <Button isDanger type="secondary">
          Hiya
        </Button>
        <Button isDanger type="secondary" disabled>
          Hiya
        </Button>
        <Button isDanger type="tertiary">
          Hiya
        </Button>
        <Button isDanger type="tertiary" disabled>
          Hiya
        </Button>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <Button isDanger isCompact>
          Hiya
        </Button>
        <Button isDanger isCompact disabled>
          Hiya
        </Button>
        <Button isDanger isCompact type="secondary">
          Hiya
        </Button>
        <Button isDanger isCompact type="secondary" disabled>
          Hiya
        </Button>
        <Button isDanger isCompact type="tertiary">
          Hiya
        </Button>
        <Button isDanger isCompact type="tertiary" disabled>
          Hiya
        </Button>
      </div>
    </>
  ));

storiesOf('Card', module).add('default', () => (
  <>
    <div style={{ maxWidth: '500px', marginBottom: '1rem' }}>
      <Card
        heading={'Hello World'}
        body={'Hello World'}
        img={
          <img
            src="https://source.unsplash.com/random/800x450?minimalist"
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
        isRow
      />
    </div>
  </>
));
