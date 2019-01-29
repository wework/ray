import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Buttons', module)
  .addWithJSX('primary', () => (
    <>
      <button className="ray--btn ray--btn--primary">Click me</button>
      <a href="javascript:;" className="ray--btn ray--btn--primary">
        Anchor Tag
      </a>
      <button className="ray--btn ray--btn--primary ray--btn--compact">
        Small clicks
      </button>
      <a
        href="javascript:;"
        className="ray--btn ray--btn--primary ray--btn--compact"
      >
        Compact Anchor
      </a>

      <button className="ray--btn ray--btn--primary ray--btn--compact" disabled>
        Disabled
      </button>
    </>
  ))
  .addWithJSX('secondary', () => (
    <>
      <button className="ray--btn ray--btn--secondary">Secondary</button>
      <button className="ray--btn ray--btn--secondary ray--btn--compact">
        Compact Secondary
      </button>
      <button
        className="ray--btn ray--btn--secondary ray--btn--compact"
        disabled
      >
        Disabled Secondary
      </button>
    </>
  ));
