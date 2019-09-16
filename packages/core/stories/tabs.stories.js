import React from 'react';
import { storiesOf } from '@storybook/react';

import Tabs from '../src/components/tabs';

function initTabs() {
  Tabs.createAll();
}

if (process.env.NODE_ENV === 'development') {
  storiesOf('Tabs', module).add('default', () => {
    setTimeout(initTabs);
    return (
      <ul className="ray-tabs">
        <li tabIndex="1" className="ray-tabs__item">
          Desktop
        </li>
        <li tabIndex="1" className="ray-tabs__item">
          Tablet
        </li>
        <li tabIndex="1" className="ray-tabs__item ray-tabs__item--active">
          Mobile
        </li>
      </ul>
    );
  });
}
