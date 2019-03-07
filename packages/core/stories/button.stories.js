import React from 'react';
import { storiesOf } from '@storybook/react';

const Divider = () => (
  <div style={{ marginBottom: '1rem', display: 'block' }} />
);

storiesOf('Button', module)
  .add('primary', () => (
    <>
      <button className="ray-btn ray-btn--primary">Click me</button>
      <Divider />
      <a
        href="https://wework.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ray-btn ray-btn--primary"
      >
        Click me anchor
      </a>
      <Divider />
      <button className="ray-btn ray-btn--primary" disabled>
        Click me disabled
      </button>
      <Divider />
      <button className="ray-btn ray-btn--primary ray-btn--compact">
        Compact click me
      </button>
      <Divider />
      <button className="ray-btn ray-btn--primary ray-btn--compact" disabled>
        Compact Disabled
      </button>
      <Divider />
      <button className="ray-btn ray-btn--primary ray-btn--danger">
        Click me danger
      </button>
      <Divider />
      <button className="ray-btn ray-btn--primary ray-btn--compact ray-btn--danger">
        Compact click me danger
      </button>
      <Divider />
      <button
        className="ray-btn ray-btn--primary ray-btn--compact ray-btn--danger"
        disabled
      >
        Compact click me danger disabled
      </button>
    </>
  ))
  .add('secondary', () => (
    <>
      <button className="ray-btn ray-btn--secondary">Click me</button>
      <Divider />
      <a
        href="https://wework.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ray-btn ray-btn--secondary"
      >
        Click me anchor
      </a>
      <Divider />
      <button className="ray-btn ray-btn--secondary" disabled>
        Click me disabled
      </button>
      <Divider />
      <button className="ray-btn ray-btn--secondary ray-btn--compact">
        Compact click me
      </button>
      <Divider />
      <button className="ray-btn ray-btn--secondary ray-btn--compact" disabled>
        Compact Disabled
      </button>
      <Divider />
      <button className="ray-btn ray-btn--secondary ray-btn--danger">
        Click me danger
      </button>
      <Divider />
      <button className="ray-btn ray-btn--secondary ray-btn--compact ray-btn--danger">
        Compact click me danger
      </button>
      <Divider />
      <button
        className="ray-btn ray-btn--secondary ray-btn--compact ray-btn--danger"
        disabled
      >
        Compact click me danger disabled
      </button>
    </>
  ))
  .add('tertiary', () => (
    <>
      <button className="ray-btn ray-btn--tertiary">Click me</button>
      <Divider />
      <a
        href="https://wework.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ray-btn ray-btn--tertiary"
      >
        Click me anchor
      </a>
      <Divider />
      <button className="ray-btn ray-btn--tertiary ray-btn--compact">
        Compact click me
      </button>
      <Divider />
      <button className="ray-btn ray-btn--tertiary" disabled>
        Disabled
      </button>
      <Divider />
      <button className="ray-btn ray-btn--tertiary ray-btn--compact" disabled>
        Compact disabled
      </button>
      <Divider />
      <button className="ray-btn ray-btn--tertiary ray-btn--danger">
        Click me danger
      </button>
      <Divider />
      <button className="ray-btn ray-btn--tertiary ray-btn--compact ray-btn--danger">
        Compact click me danger
      </button>
      <Divider />
      <button
        className="ray-btn ray-btn--tertiary ray-btn--compact ray-btn--danger"
        disabled
      >
        Compact click me danger disabled
      </button>
    </>
  ));
