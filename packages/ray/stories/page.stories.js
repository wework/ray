import React from 'react';
import { storiesOf } from '@storybook/react';

import './styles/styles.scss';

storiesOf('Page', module).addWithJSX('example', () => (
  <div className="container" style={{ padding: '4rem 0', minHeight: '100vh' }}>
    <div className="col-12">
      <div className="page__masthead">
        <div className="label">WeWork</div>
        <h1 className="h2">Space That Works for You</h1>
        <p className="p1">
          From desks to offices and entire headquarters, we create environments
          for productivity, innovation, and connection.
        </p>
      </div>

      <div
        style={{
          paddingBottom: 'calc(100% / 3)',
          backgroundImage: 'url(/hero1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  </div>
));
