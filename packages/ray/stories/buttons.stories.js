import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

const Divider = () => (
  <span style={{ width: '30px', display: 'inline-block' }} />
);

storiesOf('Buttons', module)
  .addWithJSX('primary', () => (
    <>
      <button className="ray--btn ray--btn--primary">Click me</button>
      <Divider />
      <button className="ray--btn ray--btn--primary" disabled>
        Click me disabled
      </button>
      <Divider />
      <button className="ray--btn ray--btn--primary ray--btn--compact">
        Compact click me
      </button>
      <Divider />
      <button className="ray--btn ray--btn--primary ray--btn--compact" disabled>
        Compact Disabled
      </button>
      <Divider />
      <button className="ray--btn ray--btn--primary ray--btn--primaryDanger">
        Click me danger
      </button>
      <Divider />
      <button className="ray--btn ray--btn--primary ray--btn--compact ray--btn--primaryDanger">
        Compact click me danger
      </button>
    </>
  ))
  .addWithJSX('secondary', () => (
    <>
      <button className="ray--btn ray--btn--secondary">Click me</button>
      <Divider />
      <button className="ray--btn ray--btn--secondary" disabled>
        Click me disabled
      </button>
      <Divider />
      <button className="ray--btn ray--btn--secondary ray--btn--compact">
        Compact click me
      </button>
      <Divider />
      <button
        className="ray--btn ray--btn--secondary ray--btn--compact"
        disabled
      >
        Compact Disabled
      </button>
      <Divider />
      <button className="ray--btn ray--btn--secondary ray--btn--secondaryDanger">
        Click me danger
      </button>
      <Divider />
      <button className="ray--btn ray--btn--secondary ray--btn--compact ray--btn--secondaryDanger">
        Compact click me danger
      </button>
      <Divider />
    </>
  ))
  .addWithJSX('tertiary', () => (
    <>
      <button className="ray--btn ray--btn--tertiary">Click me</button>
      <Divider />
      <button className="ray--btn ray--btn--tertiary ray--btn--compact">
        Compact click me
      </button>
      <Divider />
      <button className="ray--btn ray--btn--tertiary" disabled>
        Disabled
      </button>
      <Divider />
      <button
        className="ray--btn ray--btn--tertiary ray--btn--compact"
        disabled
      >
        Compact disabled
      </button>
      <Divider />
      <button className="ray--btn ray--btn--tertiary ray--btn--tertiaryDanger">
        Click me danger
      </button>
      <Divider />
      <button className="ray--btn ray--btn--tertiary ray--btn--compact ray--btn--tertiaryDanger">
        Compact click me danger
      </button>
      <Divider />
    </>
  ));
