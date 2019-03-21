import React from 'react';
import { storiesOf } from '@storybook/react';

import { TextField, TextArea } from '../src/components/text-field';

function initTextField() {
  TextField.createAll();
}

function initTextArea() {
  TextArea.createAll();
}

storiesOf('Text Field', module)
  .add('Text field', () => {
    setTimeout(initTextField);

    return (
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
  .add('Text field, active', () => (
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
  ))
  .add('Text field, textarea', () => {
    setTimeout(initTextArea);

    return (
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
  .add('Text field, multi-row textarea', () => {
    setTimeout(initTextArea);

    return (
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
  .add('Text field, active, textarea', () => (
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
  ))
  .add('Text field, disabled', () => {
    setTimeout(initTextField);

    return (
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
  .add('Text field, active disabled', () => (
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
  ))
  .add('Example Form', () => {
    setTimeout(initTextField);
    setTimeout(initTextArea);

    return (
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

            <button className="ray-button ray-button--primary">Submit</button>
          </div>
        </div>
      </div>
    );
  })
  .add('Hint states', () => {
    setTimeout(initTextField);

    return (
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
  .add('Text field - compact', () => {
    setTimeout(initTextField);

    return (
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
  .add('Text field, active - compact', () => (
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
  ))
  .add('Text field - compact - disabled', () => {
    setTimeout(initTextField);

    return (
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
  .add('Text field, textarea - compact', () => {
    setTimeout(initTextArea);

    return (
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
  .add('Text field, with icon', () => (
    <div className="ray-text-field ray-text-field--with-icon-left">
      <div className="ray-text-field__icon--left">👐</div>

      <input
        type="text"
        className="ray-text-field__input"
        id="input"
        placeholder="Few people are aware..."
      />
      <label className="ray-text-field__label" htmlFor="input">
        Fun fact about Ray Eames
      </label>
    </div>
  ))
  .add('Text field, active, textarea - compact', () => (
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
  ))
  .add('Text field, fieldset', () => {
    setTimeout(initTextField);

    return (
      <fieldset className="ray-fieldset">
        <legend className="ray-fieldset__legend">User Information</legend>

        <div className="ray-form-item">
          <div className="ray-text-field">
            <input
              className="ray-text-field__input"
              id="name"
              type="text"
              placeholder="Arya"
            />
            <label className="ray-text-field__label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="ray-form-item__hint">What should we call you?</div>
        </div>
        <div className="ray-form-item">
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
          <div className="ray-form-item__hint">How can we reach you?</div>
        </div>
      </fieldset>
    );
  })
  .add('Example Form - compact', () => {
    setTimeout(initTextField);
    setTimeout(initTextArea);

    return (
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

            <button className="ray-button ray-button--compact ray-button--primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  })
  .add('Hint states - compact', () => {
    setTimeout(initTextField);

    return (
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
