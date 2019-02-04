import React from 'react';
import { storiesOf } from '@storybook/react';
import { throttle, range } from 'lodash';
import withPadding from './util/withPadding';

storiesOf('Grid', module)
  .addWithJSX('default', () => (
    <div style={{ backgroundColor: 'hsl(144, 100%, 75%)' }}>
      <div className="ray--container">
        <div
          className="ray--row"
          style={{ backgroundColor: 'hsl(0, 100%, 75%)' }}
        >
          {range(12).map(n => (
            <div className="ray--col-1">
              <div
                style={{
                  minHeight: '100vh',
                  paddingBottom: '100%',
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
  ))
  .add('ray--container', () => <div className="ray--container">asdsads</div>);
