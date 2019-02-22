import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';
import getPlaceholderURL from './util/placeholder';

storiesOf('Image', module)
  .addWithJSX('16/9 img', () =>
    withPadding(
      <div style={{ maxWidth: '500px' }}>
        <div className="ray-image ray-image--16by9">
          <img src={getPlaceholderURL('800x800')} />
        </div>
      </div>
    )
  )
  .addWithJSX('3/4 img', () =>
    withPadding(
      <div style={{ maxWidth: '400px' }}>
        <div className="ray-image ray-image--3by4">
          <img src={getPlaceholderURL('800x1200')} />
        </div>
      </div>
    )
  )
  .addWithJSX('16/9 background', () =>
    withPadding(
      <div style={{ maxWidth: '500px' }}>
        <div
          className="ray-bg ray-bg--16by9"
          style={{
            backgroundImage: `url(${getPlaceholderURL('800x800')})`
          }}
        />
      </div>
    )
  )
  .addWithJSX('3/4 background', () =>
    withPadding(
      <div style={{ maxWidth: '400px' }}>
        <div
          className="ray-bg ray-bg--3by4"
          style={{
            backgroundImage: `url(${getPlaceholderURL('800x1200')})`
          }}
        />
      </div>
    )
  );
