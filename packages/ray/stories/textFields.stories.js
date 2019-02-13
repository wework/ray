import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Text Field', module)
  .addWithJSX('Text field', () =>
    withPadding(
      <div className="ray-text-field">
        <input
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
        />
        <label htmlFor="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('Text field, active', () =>
    withPadding(
      <div className="ray-text-field ray-text-field--active">
        <input
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
        />
        <label htmlFor="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('Text field, textarea', () =>
    withPadding(
      <div className="ray-text-area">
        <textarea id="textarea" placeholder="Few people are aware..." />
        <label htmlFor="textarea">Fun fact about Ray Eames</label>
      </div>
    )
  )
  .addWithJSX('Text field, multi-row textarea', () =>
    withPadding(
      <div className="ray-text-area">
        <textarea row="4" id="textarea" placeholder="Few people are aware..." />
        <label htmlFor="textarea">Fun fact about Ray Eames</label>
      </div>
    )
  )
  .addWithJSX('Text field, active, textarea', () =>
    withPadding(
      <div className="ray-text-area ray-text-area--active">
        <textarea id="textarea" placeholder="Few people are aware..." />
        <label htmlFor="textarea">Fun fact about Ray Eames</label>
      </div>
    )
  )
  .addWithJSX('Text field, disabled', () =>
    withPadding(
      <div className="ray-text-field ray-text-field--disabled">
        <input
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
          disabled
        />
        <label htmlFor="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('Text field, active disabled', () =>
    withPadding(
      <div className="ray-text-field ray-text-field--active ray-text-field--disabled">
        <input
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
          disabled
        />
        <label htmlFor="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('Example Form', () =>
    withPadding(
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <h2 className="h3">Sign up</h2>
            <div className="ray-form-item">
              <div className="ray-text-field">
                <input id="name" type="text" placeholder="Arya Stark" />
                <label htmlFor="name">Name</label>
              </div>
            </div>

            <div className="ray-form-item">
              <div className="ray-text-field">
                <input
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="ray-form-item__hint">We want your emails</div>
            </div>

            <div className="ray-form-item">
              <div className="ray-text-field">
                <input id="password" type="password" placeholder="*********" />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="ray-form-item">
              <div className="ray-text-field">
                <input
                  id="long-label"
                  type="text"
                  placeholder="Super soopah soup or super long placeholder"
                />
                <label htmlFor="long-label">
                  Label Empty State That Overflows quickly and is very long
                </label>
              </div>
            </div>

            <button className="ray-btn ray-btn--primary">Submit</button>
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
            <div className="ray-form-item">
              <div className="ray-text-field">
                <input id="name" type="text" placeholder="Arya Stark" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="ray-form-item__hint">Nuetral hint</div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--success">
                <input
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--success">
                Success hint
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--error">
                <input id="password" type="password" placeholder="*********" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--error">
                Error hint
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
  .addWithJSX('Text field - compact', () =>
    withPadding(
      <div className="ray-text-field ray-text-field--compact">
        <input
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
        />
        <label htmlFor="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('Text field, active - compact', () =>
    withPadding(
      <div className="ray-text-field ray-text-field--active ray-text-field--compact">
        <input
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
        />
        <label htmlFor="email">Email address</label>
      </div>
    )
  )
  .addWithJSX('Text field, textarea - compact', () =>
    withPadding(
      <div className="ray-text-area ray-text-area--compact">
        <textarea id="textarea" placeholder="Few people are aware..." />
        <label htmlFor="textarea">Fun fact about Ray Eames</label>
      </div>
    )
  )
  .addWithJSX('Text field, active, textarea - compact', () =>
    withPadding(
      <div className="ray-text-area ray-text-area--active ray-text-area--compact">
        <textarea id="textarea" placeholder="Few people are aware..." />
        <label htmlFor="textarea">Fun fact about Ray Eames</label>
      </div>
    )
  )
  .addWithJSX('Example Form - compact', () =>
    withPadding(
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <h2 className="h3">Sign up</h2>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input id="name" type="text" placeholder="Arya Stark" />
                <label htmlFor="name">Name</label>
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="ray-form-item__hint">We want your emails</div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input id="password" type="password" placeholder="*********" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  id="long-label"
                  type="text"
                  placeholder="Super soopah soup or super long placeholder"
                />
                <label htmlFor="long-label">
                  Label Empty State That Overflows quickly and is very long
                </label>
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-area ray-text-area--compact">
                <textarea
                  id="textarea"
                  placeholder="Tell me, uh, something about yourself"
                />
                <label htmlFor="textarea">Notes</label>
              </div>
            </div>

            <button className="ray-btn ray-btn--compact ray-btn--primary">
              Submit
            </button>
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
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input id="name" type="text" placeholder="Arya Stark" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="ray-form-item__hint">Nuetral hint</div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--success ray-text-field--compact">
                <input
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--success">
                Success hint
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--error ray-text-field--compact">
                <input id="password" type="password" placeholder="*********" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--error">
                Error hint
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
