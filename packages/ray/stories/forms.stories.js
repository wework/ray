import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Forms', module)
  .addWithJSX('single field', () =>
    withPadding(
      <div className="field">
        <input id="email" type="text" placeholder="arya.stark@winterfell.com" />
        <label for="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('example form', () =>
    withPadding(
      <React.Fragment>
        <h2 className="h3">Sign up</h2>
        <p className="p3" style={{ marginBottom: '1.5rem' }}>
          You have the opportunity to try new things, but also to make mistakes
          and fail without the pressure of being judged.
        </p>
        <div className="field">
          <input id="name" type="text" placeholder="Arya Stark" />
          <label for="name">Name</label>
        </div>
        <div className="field">
          <input
            id="email"
            type="text"
            placeholder="arya.stark@winterfell.com"
          />
          <label for="email">Email address</label>
        </div>
        <div className="field">
          <input
            id="password"
            type="password"
            placeholder="the.north.remembers"
          />
          <label for="password">Password</label>
        </div>

        <button className="btn--primary">Submit</button>
      </React.Fragment>
    )
  );
