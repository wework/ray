import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Forms', module)
  .addWithJSX('Text field', () =>
    withPadding(
      <div className="ray--field">
        <input id="email" type="email" placeholder="arya.stark@winterfell.org" />
        <label for="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('Text field, active', () =>
    withPadding(
      <div className="ray--field ray--field--active">
        <input id="email" type="email" placeholder="arya.stark@winterfell.org" />
        <label for="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('Text field, disabled', () =>
    withPadding(
      <div className="ray--field">
        <input id="email" type="email" placeholder="arya.stark@winterfell.org" disabled />
        <label for="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('Text field, active disabled', () =>
    withPadding(
      <div className="ray--field ray--field--active ray--field--disabled">
        <input id="email" type="email" placeholder="arya.stark@winterfell.org" disabled />
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
            <div className="ray--fieldWrapper">
              <div className="ray--field">
                <input id="name" type="text" placeholder="Arya Stark" />
                <label for="name">Name</label>
              </div>
            </div>
            <div className="ray--fieldWrapper">
              <div className="ray--field">
                <input
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label for="email">Email address</label>
              </div>
              <div className="ray--field__hint">We want your emails</div>
            </div>
            <div className="ray--fieldWrapper">
              <div className="ray--field">
                <input
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="ray--fieldWrapper">
              <div className="ray--field">
                <input id="long-label" type="text" placeholder="Super soopah soup or super long placeholder" />
                <label for="long-label">Label Empty State That Overflows quickly and is very long</label>
              </div>
            </div>

            <button className="ray--btn ray--btn--primary">Submit</button>
          </div>
        </div>
      </div>
    )
  )
  .addWithJSX('Hint states', () =>
    withPadding(
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="ray--fieldWrapper">
              <div className="ray--field">
                <input id="name" type="text" placeholder="Arya Stark" />
                <label for="name">Name</label>
              </div>
              <div className="ray--field__hint">Nuetral hint</div>
            </div>
            <div className="ray--fieldWrapper">
              <div className="ray--field ray--field--success">
                <input
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label for="email">Email address</label>
              </div>
              <div className="ray--field__hint ray--field__hint--success">Success hint</div>
            </div>
            <div className="ray--fieldWrapper">
              <div className="ray--field ray--field--error">
                <input
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label for="password">Password</label>
              </div>
              <div className="ray--field__hint ray--field__hint--error">Error hint</div>
            </div>
          </div>
        </div>
      </div>
    )
  )
  .addWithJSX('Text field - compact', () =>
    withPadding(
      <div className="ray--field ray--field--compact">
        <input id="email" type="email" placeholder="arya.stark@winterfell.org" />
        <label for="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('Example form - compact', () =>
    withPadding(
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <h2 className="h3">Sign up</h2>
            <div className="ray--fieldWrapper">
              <div className="ray--field ray--field--compact">
                <input id="name" type="text" placeholder="Arya Stark" />
                <label for="name">Name</label>
              </div>
            </div>
            <div className="ray--fieldWrapper">
              <div className="ray--field ray--field--compact">
                <input
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label for="email">Email address</label>
              </div>
              <div className="ray--field__hint">We want your emails</div>
            </div>
            <div className="ray--fieldWrapper">
              <div className="ray--field ray--field--compact">
                <input
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="ray--fieldWrapper">
              <div className="ray--field ray--field--compact">
                <input id="long-label" type="text" placeholder="Super soopah soup or super long placeholder" />
                <label for="long-label">Label Empty State That Overflows quickly and is very long</label>
              </div>
            </div>

            <button className="ray--btn ray--btn--compact ray--btn--primary">Submit</button>
          </div>
        </div>
      </div>
    )
  )
  .addWithJSX('Hint states - compact', () =>
    withPadding(
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="ray--fieldWrapper">
              <div className="ray--field ray--field--compact">
                <input id="name" type="text" placeholder="Arya Stark" />
                <label for="name">Name</label>
              </div>
              <div className="ray--field__hint">Nuetral hint</div>
            </div>
            <div className="ray--fieldWrapper">
              <div className="ray--field ray--field--success ray--field--compact">
                <input
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label for="email">Email address</label>
              </div>
              <div className="ray--field__hint ray--field__hint--success">Success hint</div>
            </div>
            <div className="ray--fieldWrapper">
              <div className="ray--field ray--field--error ray--field--compact">
                <input
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label for="password">Password</label>
              </div>
              <div className="ray--field__hint ray--field__hint--error">Error hint</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
