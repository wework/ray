import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Tabs', module).addWithJSX('Default', () =>
  withPadding(
    <ul className="Tabs">
      <li className="Tabs__item">Desktop</li>
      <li className="Tabs__item">Tablet</li>
      <li className="Tabs__item Tabs__item--active">Mobile</li>
    </ul>
  )
);
