import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Tabs', module).addWithJSX('default', () =>
  withPadding(
    <ul className="ray-tabs">
      <li className="ray-tabs__item">Desktop</li>
      <li className="ray-tabs__item">Tablet</li>
      <li className="ray-tabs__item ray-tabs__item--active">Mobile</li>
    </ul>
  )
);
