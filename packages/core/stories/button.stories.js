import React from 'react';
import { storiesOf } from '@storybook/react';

const Divider = () => (
  <div style={{ marginBottom: '1rem', display: 'block' }} />
);

storiesOf('Button', module)
  .add(
    'primary',
    () => (
      <>
        <button className="ray-button ray-button--primary">Click me</button>
        <Divider />
        <a
          href="https://wework.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ray-button ray-button--primary"
        >
          Click me anchor
        </a>
        <Divider />
        <button className="ray-button ray-button--primary" disabled>
          Click me disabled
        </button>
        <Divider />
        <button className="ray-button ray-button--primary ray-button--compact">
          Compact click me
        </button>
        <Divider />
        <button
          className="ray-button ray-button--primary ray-button--compact"
          disabled
        >
          Compact Disabled
        </button>
        <Divider />
        <button className="ray-button ray-button--primary ray-button--danger">
          Click me danger
        </button>
        <Divider />
        <button className="ray-button ray-button--primary ray-button--compact ray-button--danger">
          Compact click me danger
        </button>
        <Divider />
        <button
          className="ray-button ray-button--primary ray-button--compact ray-button--danger"
          disabled
        >
          Compact click me danger disabled
        </button>
      </>
    ),
    {
      'in-dsm': {
        id: '5d4360360dcc4e690cf9178f'
      }
    }
  )
  .add('secondary', () => (
    <>
      <button className="ray-button ray-button--secondary">Click me</button>
      <Divider />
      <a
        href="https://wework.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ray-button ray-button--secondary"
      >
        Click me anchor
      </a>
      <Divider />
      <button className="ray-button ray-button--secondary" disabled>
        Click me disabled
      </button>
      <Divider />
      <button className="ray-button ray-button--secondary ray-button--compact">
        Compact click me
      </button>
      <Divider />
      <button
        className="ray-button ray-button--secondary ray-button--compact"
        disabled
      >
        Compact Disabled
      </button>
      <Divider />
      <button className="ray-button ray-button--secondary ray-button--danger">
        Click me danger
      </button>
      <Divider />
      <button className="ray-button ray-button--secondary ray-button--compact ray-button--danger">
        Compact click me danger
      </button>
      <Divider />
      <button
        className="ray-button ray-button--secondary ray-button--compact ray-button--danger"
        disabled
      >
        Compact click me danger disabled
      </button>
    </>
  ))
  .add('tertiary', () => (
    <>
      <button className="ray-button ray-button--tertiary">Click me</button>
      <Divider />
      <a
        href="https://wework.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ray-button ray-button--tertiary"
      >
        Click me anchor
      </a>
      <Divider />
      <button className="ray-button ray-button--tertiary ray-button--compact">
        Compact click me
      </button>
      <Divider />
      <button className="ray-button ray-button--tertiary" disabled>
        Disabled
      </button>
      <Divider />
      <button
        className="ray-button ray-button--tertiary ray-button--compact"
        disabled
      >
        Compact disabled
      </button>
      <Divider />
      <button className="ray-button ray-button--tertiary ray-button--danger">
        Click me danger
      </button>
      <Divider />
      <button className="ray-button ray-button--tertiary ray-button--compact ray-button--danger">
        Compact click me danger
      </button>
      <Divider />
      <button
        className="ray-button ray-button--tertiary ray-button--compact ray-button--danger"
        disabled
      >
        Compact click me danger disabled
      </button>
    </>
  ))
  .add('dark', () => (
    <div
      style={{
        backgroundColor: 'hsla(0, 0%, 20%, 1)',
        padding: '1rem'
      }}
    >
      <button className="ray-button ray-button--primary ray-button--dark">
        Click me
      </button>
      <button
        className="ray-button ray-button--primary ray-button--dark"
        disabled
      >
        Disabled
      </button>
      <button className="ray-button ray-button--secondary ray-button--dark">
        Click me
      </button>
      <button
        className="ray-button ray-button--secondary ray-button--dark"
        disabled
      >
        Disabled
      </button>
      <button className="ray-button ray-button--tertiary ray-button--dark">
        Click me
      </button>
      <button
        className="ray-button ray-button--tertiary ray-button--dark"
        disabled
      >
        Disabled
      </button>
    </div>
  ))
  .add('as link', () => <button className="ray-link">button as link</button>);
