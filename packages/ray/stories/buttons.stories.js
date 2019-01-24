import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Buttons', module)
  .addWithJSX('primary', () => (
    <button className="btn--primary">Hello World</button>
  ))
  .addWithJSX('secondary', () => (
    <button className="btn--secondary">Hello World</button>
  ));
