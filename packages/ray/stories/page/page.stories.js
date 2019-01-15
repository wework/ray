import React from 'react';
import { storiesOf } from '@storybook/react';

import './styles.scss';

const Image = props => {
  return <img {...props} style={{ width: '100%' }} />;
};

storiesOf('Page', module).addWithJSX('example', () => (
  <div className="container" style={{ padding: '4rem 0', minHeight: '100vh' }}>
    <div className="page__masthead">
      <div className="label">WeWork</div>
      <h1 className="h2">Space That Works for You</h1>
      <p className="p1">
        From desks to offices and entire headquarters, we create environments
        for productivity, innovation, and connection.
      </p>
    </div>
    <div className="col-12">
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
