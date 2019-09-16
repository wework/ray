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
      <div className="ray-tabs">
        <ul className="ray-tabs__list">
          <li tabIndex="1" data-tab-order="1" className="ray-tabs__item">
            Desktop
          </li>
          <li tabIndex="1" data-tab-order="2" className="ray-tabs__item">
            Tablet
          </li>
          <li
            tabIndex="1"
            data-tab-order="3"
            className="ray-tabs__item ray-tabs__item--active"
          >
            Mobile
          </li>
        </ul>
        <div className="ray-tabs__content" data-content-order="1">
          <h2>
            <span className="ray-text--display-2">Desktop content</span>
          </h2>
        </div>
        <div className="ray-tabs__content" data-content-order="2">
          <h2>
            <span className="ray-text--display-2">Tablet content</span>
          </h2>
        </div>
        <div
          className="ray-tabs__content ray-tabs__content--active"
          data-content-order="3"
        >
          <h2>
            <span className="ray-text--display-2">Mobile content</span>
          </h2>
        </div>
      </div>
    );
  });
}
