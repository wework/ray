import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Breadcrumb', module).add('example', () => (
  <ul className="ray-breadcrumbs">
    <li className="ray-breadcrumb">
      <a href="javascript:;">Home</a>
    </li>
    <li className="ray-breadcrumb">
      <a href="javascript:;">New York City</a>
    </li>
    <li className="ray-breadcrumb">Tribeca</li>
  </ul>
));
