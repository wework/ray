import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Forms', module)
  .addWithJSX('FormControl', () =>
    withPadding(
      <div className="FormControl">
        <input id="email" type="text" placeholder="arya.stark@winterfell.com" />
        <label for="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('FormControl FormControl--active', () =>
    withPadding(
      <div className="FormControl FormControl--active">
        <input id="email" type="text" placeholder="arya.stark@winterfell.com" />
        <label for="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('Example form', () =>
    withPadding(
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <h2 className="h3">Sign up</h2>
            <div className="FormControl">
              <input id="name" type="text" placeholder="Arya Stark" />
              <label for="name">Name</label>
            </div>
            <div className="FormControl">
              <input
                id="email"
                type="text"
                placeholder="arya.stark@winterfell.com"
              />
              <label for="email">Email address</label>
            </div>
            <div className="FormControl">
              <input
                id="password"
                type="password"
                placeholder="the.north.remembers"
              />
              <label for="password">Password</label>
            </div>

            <button className="btn--primary">Submit</button>
          </div>
        </div>
      </div>
    )
  );
