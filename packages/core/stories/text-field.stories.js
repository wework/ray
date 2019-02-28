import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';
import { TextField, TextArea } from '../lib/components/text-field';

function initTextField() {
  TextField.createAll();
}

function initTextArea() {
  TextArea.createAll();
}

storiesOf('Text Field', module)
  .addWithJSX('Text field', () => {
    setTimeout(initTextField);

    return withPadding(
      <div className="ray-text-field">
        <input
          className="ray-text-field__input"
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
        />
        <label className="ray-text-field__label" htmlFor="email">
          Email address
        </label>
      </div>
    );
  })
  .addWithJSX('Text field, active', () =>
    withPadding(
      <div className="ray-text-field ray-text-field--active">
        <input
          className="ray-text-field__input"
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
        />
        <label className="ray-text-field__label" htmlFor="email">
          Email address
        </label>
      </div>
    )
  )
  .addWithJSX('Text field, textarea', () => {
    setTimeout(initTextArea);

    return withPadding(
      <div className="ray-text-area">
        <textarea
          className="ray-text-area__input"
          id="textarea"
          placeholder="Few people are aware..."
        />
        <label className="ray-text-area__label" htmlFor="textarea">
          Fun fact about Ray Eames
        </label>
      </div>
    );
  })
  .addWithJSX('Text field, multi-row textarea', () => {
    setTimeout(initTextArea);

    return withPadding(
      <div className="ray-text-area">
        <textarea
          className="ray-text-area__input"
          row="4"
          id="textarea"
          placeholder="Few people are aware..."
        />
        <label className="ray-text-area__label" htmlFor="textarea">
          Fun fact about Ray Eames
        </label>
      </div>
    );
  })
  .addWithJSX('Text field, active, textarea', () =>
    withPadding(
      <div className="ray-text-area ray-text-area--active">
        <textarea
          className="ray-text-area__input"
          id="textarea"
          placeholder="Few people are aware..."
        />
        <label className="ray-text-area__label" htmlFor="textarea">
          Fun fact about Ray Eames
        </label>
      </div>
    )
  )
  .addWithJSX('Text field, disabled', () => {
    setTimeout(initTextField);

    return withPadding(
      <div className="ray-text-field ray-text-field--disabled">
        <input
          className="ray-text-field__input"
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
          disabled
        />
        <label className="ray-text-field__label" htmlFor="email">
          Email address
        </label>
      </div>
    );
  })
  .addWithJSX('Text field, active disabled', () =>
    withPadding(
      <div className="ray-text-field ray-text-field--active ray-text-field--disabled">
        <input
          className="ray-text-field__input"
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
          disabled
        />
        <label className="ray-text-field__label" htmlFor="email">
          Email address
        </label>
      </div>
    )
  )
  .addWithJSX('Example Form', () => {
    setTimeout(initTextField);
    setTimeout(initTextArea);

    return withPadding(
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <h2 className="h3">Sign up</h2>
            <div className="ray-form-item">
              <div className="ray-text-field">
                <input
                  className="ray-text-field__input"
                  id="name"
                  type="text"
                  placeholder="Arya Stark"
                />
                <label className="ray-text-field__label" htmlFor="name">
                  Name
                </label>
              </div>
            </div>

            <div className="ray-form-item">
              <div className="ray-text-field">
                <input
                  className="ray-text-field__input"
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label className="ray-text-field__label" htmlFor="email">
                  Email address
                </label>
              </div>
              <div className="ray-form-item__hint">We want your emails</div>
            </div>

            <div className="ray-form-item">
              <div className="ray-text-field">
                <input
                  className="ray-text-field__input"
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label className="ray-text-field__label" htmlFor="password">
                  Password
                </label>
              </div>
            </div>

            <div className="ray-form-item">
              <div className="ray-text-field">
                <input
                  className="ray-text-field__input"
                  id="long-label"
                  type="text"
                  placeholder="Super soopah soup or super long placeholder"
                />
                <label className="ray-text-field__label" htmlFor="long-label">
                  Label Empty State That Overflows quickly and is very long
                </label>
              </div>
            </div>

            <button className="ray-btn ray-btn--primary">Submit</button>
          </div>
        </div>
      </div>
    );
  })
  .addWithJSX('Hint states', () => {
    setTimeout(initTextField);

    return withPadding(
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="ray-form-item">
              <div className="ray-text-field">
                <input
                  className="ray-text-field__input"
                  id="name"
                  type="text"
                  placeholder="Arya Stark"
                />
                <label className="ray-text-field__label" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="ray-form-item__hint">Nuetral hint</div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--success">
                <input
                  className="ray-text-field__input"
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label className="ray-text-field__label" htmlFor="email">
                  Email address
                </label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--success">
                Success hint
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--error">
                <input
                  className="ray-text-field__input"
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label className="ray-text-field__label" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--error">
                Error hint
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
  .addWithJSX('Text field - compact', () => {
    setTimeout(initTextField);

    return withPadding(
      <div className="ray-text-field ray-text-field--compact">
        <input
          className="ray-text-field__input"
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
        />
        <label className="ray-text-field__label" htmlFor="email">
          Email address
        </label>
      </div>
    );
  })
  .addWithJSX('Text field, active - compact', () =>
    withPadding(
      <div className="ray-text-field ray-text-field--active ray-text-field--compact">
        <input
          className="ray-text-field__input"
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
        />
        <label className="ray-text-field__label" htmlFor="email">
          Email address
        </label>
      </div>
    )
  )
  .addWithJSX('Text field - compact - disabled', () => {
    setTimeout(initTextField);

    return withPadding(
      <div className="ray-text-field ray-text-field--compact ray-text-field--disabled">
        <input
          className="ray-text-field__input"
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
          disabled
        />
        <label className="ray-text-field__label" htmlFor="email">
          Email address
        </label>
      </div>
    );
  })
  .addWithJSX('Text field, textarea - compact', () => {
    setTimeout(initTextArea);

    return withPadding(
      <div className="ray-text-area ray-text-area--compact">
        <textarea
          className="ray-text-area__input"
          id="textarea"
          placeholder="Few people are aware..."
        />
        <label className="ray-text-area__label" htmlFor="textarea">
          Fun fact about Ray Eames
        </label>
      </div>
    );
  })
  .addWithJSX('Text field, active, textarea - compact', () =>
    withPadding(
      <div className="ray-text-area ray-text-area--active ray-text-area--compact">
        <textarea
          className="ray-text-area__input"
          id="textarea"
          placeholder="Few people are aware..."
        />
        <label className="ray-text-area__label" htmlFor="textarea">
          Fun fact about Ray Eames
        </label>
      </div>
    )
  )
  .addWithJSX('Example Form - compact', () => {
    setTimeout(initTextField);
    setTimeout(initTextArea);

    return withPadding(
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <h2 className="h3">Sign up</h2>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="name"
                  type="text"
                  placeholder="Arya Stark"
                />
                <label className="ray-text-field__label" htmlFor="name">
                  Name
                </label>
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label className="ray-text-field__label" htmlFor="email">
                  Email address
                </label>
              </div>
              <div className="ray-form-item__hint">We want your emails</div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label className="ray-text-field__label" htmlFor="password">
                  Password
                </label>
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="long-label"
                  type="text"
                  placeholder="Super soopah soup or super long placeholder"
                />
                <label className="ray-text-field__label" htmlFor="long-label">
                  Label Empty State That Overflows quickly and is very long
                </label>
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-area ray-text-area--compact">
                <textarea
                  className="ray-text-area__input"
                  id="textarea"
                  placeholder="Tell me, uh, something about yourself"
                />
                <label className="ray-text-area__label" htmlFor="textarea">
                  Notes
                </label>
              </div>
            </div>

            <button className="ray-btn ray-btn--compact ray-btn--primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  })
  .addWithJSX('Hint states - compact', () => {
    setTimeout(initTextField);

    return withPadding(
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="name"
                  type="text"
                  placeholder="Arya Stark"
                />
                <label className="ray-text-field__label" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="ray-form-item__hint">Nuetral hint</div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--success ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label className="ray-text-field__label" htmlFor="email">
                  Email address
                </label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--success">
                Success hint
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--error ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label className="ray-text-field__label" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--error">
                Error hint
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
