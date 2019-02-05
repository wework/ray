import React from 'react';
import { storiesOf } from '@storybook/react';
import { throttle, range } from 'lodash';
import withPadding from './util/withPadding';

storiesOf('Grid', module).addWithJSX('default', () => (
  <div style={{ backgroundColor: 'hsl(144, 100%, 75%)' }}>
    <div className="ray--grid">
      <div
        className="ray--grid__inner"
        style={{ backgroundColor: 'hsl(0, 100%, 75%)' }}
      >
        {range(12).map(n => (
          <div className="ray--grid__cell--span-1">
            <div
              style={{
                minHeight: '4vh',
                backgroundColor: 'hsl(255, 100%, 75%)'
              }}
            >
              {n + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
));
